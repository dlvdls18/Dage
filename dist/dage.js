var Dage = {
  version: 2,
  pages: [],
  events: {},
  active: null,
  notfound: null,
  onchanged() {},
  init() {
    let dage = this;
    let pages = document.querySelectorAll("[data-page]");
    dage.pages = [];
    pages.forEach(page => {
      let active = page.getAttribute("data-active") != null;
      let name = page.getAttribute("data-page");
      if(dage.active == null && active) dage.active = name;
      dage.pages.push({
        target: page, name,
        active: dage.active != null ? false : active,
        onpagevisible: dage.onpagevisible,
        onpagehidden: dage.onpagehidden,
        onselect: _ => dage.events[this.name](this)
      });
    });
    let navs = document.querySelectorAll("[data-navigate]");
    navs.forEach(nav => {
      _navigator(nav, dage);
    });
    let notfound = document.querySelector("[data-notfound]");
    if(notfound != null) {
      dage.notfound = {
        target: notfound, name: "notfound",
        active: false,
        onpagevisible: dage.onpagevisible,
        onpagehidden: dage.onpagehidden
      }
    }
  },
  onpagevisible(page) {
    page.target.style.display = "block";
  },
  onpagehidden(page) {
    page.target.style.display = "none";
  },
  _navigator(nav) {
    nav.dage = dage;
    nav.onclick = evt => {
      let target = evt.target;
      if(target.dage == null) target = target.parentNode;
      dage.navigate(nav.getAttribute("data-navigate"));
    }
  },
  on(page, callback) {
    this.events[page] = callback;
  },
  off(page) {
    this.events[page] = _ => _;
  },
  add(target, name) {
    target.setAttribute("data-page", name);
    this.init();
  },
  remove(target) {
    target.removeAttribute("data-page", name);
    this.init();
  },
  navigate(page) {
    let ref = page;
    if(!pages.map(p => p.name).includes(ref)) {
      ref = "notfound";
    }
    let dage = this;
    dage.active = null;
    let target = pages.select(p => {
      let b = p.name == ref;
      if(b) {
        p.active = true;
        dage.active = p;
        p.onpagevisible(p.name, dage);
      } else {
        p.active = false;
        p.onpagehidden(p.name, dage);
      }
      return b;
    });
    if(this.events[ref] != null) this.events[ref](this);
    this.onchanged(ref, this);
  }
}

Dage.init();