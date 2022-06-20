var Dage = {
  $: {},
  l: [],
  _s: false,
  _() {
    Dage.p = document.querySelectorAll("[data-page]");
    this.l.forEach(function(el) {
      Dage.p.push(el);
    });
    /*Dage.p.forEach(function(el) {
      if(el.getAttribute("data-active") != null) Dage.f1(el);
      else Dage.f0(el);
    });*/
    Dage.__ = (window ? (function(){
      document.querySelectorAll("[data-navigate]").forEach(function(el) {
        el.onclick = Dage.navigate;
      });
    })() : 0);
  },
  f1(el) {
    el.removeAttribute("hidden");
  },
  f0(el) {
    el.setAttribute("hidden", "");
  },
  add(el, name) {
    if(name) el.setAttribute("data-page", name);
    this.p.push(el);
    this.l.push(el);
  },
  navigate(name) {
    this.p.forEach(function(el) {
      var n = el.getAttribute("data-page");
      if(n == name) Dage.f1(el);
      else Dage.f0(el);
    });
    if(this.$[name] && !this._s) this.$[name].call(this);
  },
  show(name) {
    if(this.$[name] && !this._s) this.$[name].call(this);
    this.p.forEach(function(el) {
      var n = el.getAttribute("data-page");
      if(n == name) Dage.f1(el);
    });
  },
  hide(name) {
    this.p.forEach(function(el) {
      var n = el.getAttribute("data-page");
      if(n == name) Dage.f0(el);
    });
  },
  silent() {
    this._s = true;
  },
  notify() {
    this._s = false;
  },
  isSilent() {
    return eval(`${this._s}`);
  },
  setShowHandler(f) {
    this.f1 = f;
  },
  setHideHandler(f) {
    this.f0 = f;
  },
  update() {
    this._();
  },
  on(name, f) {
    this.$[name] = f;
  },
  off(name) {
    this.$[name] = undefined;
  }
}

Dage._();