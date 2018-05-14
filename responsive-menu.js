class ResponsiveMenu {
  constructor(container) {
    // Main `<nav>` element
    this.container = document.getElementById(container);
    this.menu = this.container.getElementsByTagName("ul")[0];
    this.menuToggle = this.container.getElementsByTagName("button")[0];
    this.submenus = this.container.getElementsByClassName("menu__item--has-children");

    // Initialise the menu
    this._init();

    this._removeAria();

    this._createSubmenuButtons();
  }

  // Initialise our menu
  _init() {
    this.menuToggle.setAttribute("aria-expanded", "false");

    // Not sure why we need this?
    if (!this.menu.classList.contains("js-nav-menu")) {
      this.menu.classList.add("js-nav-menu");
    }

    // Toggle classes and ARIA states on click.
    this.menuToggle.addEventListener("click", () => {
      this._toggleMenu();
      this._setFocus();
    });

    // Close menu using Esc key.
    document.addEventListener("keyup", event => {
      if (27 === event.keyCode) {
        if (this._isMenuOpen()) {
          this._toggleMenu();
          this.menuToggle.focus();
        }
      }
    });

    // Remove ARIA when on "desktop".
    window.addEventListener("resize", () => this._removeAria);
  }

  // Toggle menu classes and ARIA when button is pressed
  _toggleMenu() {
    let expanded =
      "false" === this.menuToggle.getAttribute("aria-expanded")
        ? "true"
        : "false";
    this.container.classList.toggle("is-toggled");
    this.menuToggle.setAttribute("aria-expanded", expanded);
  }

  _toggleSubmenu() {
    let toggles = this.menu.getElementsByClassName("menu__submenu-toggle");

    Array.prototype.forEach.call(toggles, toggle => {
      let expanded =
        "false" === toggle.getAttribute("aria-expanded")
          ? "true"
          : "false";

      toggle.setAttribute("aria-expanded", expanded);
    });
  }

  // Add submenu button to any element that has children
  // TODO
  _createSubmenuButtons() {
    Array.prototype.forEach.call(this.submenus, element => {
      let anchor = element.getElementsByTagName("a")[0];
      let submenu = element.getElementsByTagName("ul")[0];
      let submenuToggle = document.createElement("button");
      let id = `submenu-${this._createUUID()}`;

      // Add our new unique ID as an ID to the submenu
      submenu.setAttribute("id", id);

      // Add our new unique ID to match up with the button.
      submenuToggle.setAttribute("aria-controls", id);

      // Add class to button.
      submenuToggle.classList.add("menu__submenu-toggle");

      // Add icon to button - temporary to help visualise
      submenuToggle.innerHTML = "+";

      // Add our new button after the anchor.
      anchor.after(submenuToggle);
    });
  }

  _removeAria() {
    if (!this._isMobile()) {
      this.menuToggle.setAttribute("aria-expanded", "false");
    }
  }

  // Used to determind if we are on mobile or not
  _isMobile() {
    // If menu toggle button has display: none css rule, we're on desktop.
    let isMobile =
      "none" ===
      window.getComputedStyle(this.menuToggle, null).getPropertyValue("display")
        ? false
        : true;
    return isMobile;
  }

  _isMenuOpen() {
    let isMenuOpen =
      "false" === this.menuToggle.getAttribute("aria-expanded") ? false : true;
    return isMenuOpen;
  }

  // Function to generate a Unique ID that can be used for the ID's for submenus, buttons etc
  _createUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
  }

  _setFocus() {
    // Bail if menu is not open.
    if (!this._isMenuOpen()) {
      return;
    }

    // Set focusable elements inside main navigation.
    let focusableElements = this.container.querySelectorAll([
      "a[href]",
      "area[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "iframe",
      "object",
      "embed",
      "[contenteditable]",
      '[tabindex]:not([tabindex^="-"])'
    ]);
    let firstFocusableElement = focusableElements[0];
    let lastFocusableElement = focusableElements[focusableElements.length - 1];

    // Redirect last Tab to first focusable element.
    lastFocusableElement.addEventListener("keydown", e => {
      if (9 === e.keyCode && !e.shiftKey) {
        e.preventDefault();
        this.menuToggle.focus(); // Set focus on first element - that's actually close menu button.
      }
    });

    // Redirect first Shift+Tab to toggle button element.
    firstFocusableElement.addEventListener("keydown", e => {
      if (9 === e.keyCode && e.shiftKey) {
        e.preventDefault();
        this.menuToggle.focus(); // Set focus on first element.
      }
    });

    // Redirect Shift+Tab from the toggle button to last focusable element.
    this.menuToggle.addEventListener("keydown", e => {
      if (9 === e.keyCode && e.shiftKey) {
        e.preventDefault();
        lastFocusableElement.focus(); // Set focus on last element.
      }
    });
  }
}
