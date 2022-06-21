var Dage = {
  ver: 1.5,
  $: {},
  l: [],
  a: null,
  _s: false,
  _() {
    Dage.p = document.querySelectorAll("[data-page]");
    this.l.forEach(function(p) {
      p[0].setAttribute("data-page", p[1]);
      Dage.p.push(p[0]);
    });
    Dage.p.forEach(function(el) {
      if(el.getAttribute("data-active") != null) Dage.f1(el);
      else Dage.f0(el);
    });
    document.querySelectorAll("[data-navigate]").forEach(function(el) {
      Dage.nh(el);
    });
  },
  f1(el) {
    el.style.display = "block";
  },
  f0(el) {
    el.style.display = "none";
  },
  nh(el) {
    el.addEventListener("click", function(e) {
      Dage.navigate(e.target.getAttribute("data-navigate"));
    });
  },
  ocb() {}, oca() {}, os() {}, oh() {}, nf() {},
  add(el, name) {
    if(name) el.setAttribute("data-page", name);
    this.p.push(el);
    this.l.push([el, name]);
  },
  navigate(name) {
    if(!this._s) this.ocb(name);
    this.p.forEach(function(el) {
      var n = el.getAttribute("data-page");
      if(n == name) Dage.f1(el);
      else Dage.f0(el);
    });
    if(this.$[name] && !this._s) this.$[name].call(this);
    if(!this._s) this.oca(name);
    this.a = name;
    if(!this.$[name] && this.$.notfound) {
      Dage.navigate("notfound");
      Dage.nf(name);
    }
  },
  show(name) {
    if(this.$[name] && !this._s) this.$[name].call(this);
    this.p.forEach(function(el) {
      var n = el.getAttribute("data-page");
      if(n == name) Dage.f1(el);
    });
    this.os(name);
  },
  hide(name) {
    this.p.forEach(function(el) {
      var n = el.getAttribute("data-page");
      if(n == name) Dage.f0(el);
    });
    this.oh(name);
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
  },
  setNavigationHandler(f) {
    this.nh = f;
  },
  setBeforeChange(f) {
    this.ocb = f;
  },
  setAfterChange(f) {
    this.oca = f;
  },
  setOnShow(f) {
    this.os = f;
  },
  setOnHide(f) {
    this.oh = f;
  },
  setPageActive(name, s) {
    var n = this.l.map(function(p){return p[1]});
    var e = this.l.map(function(p){return p[0]});
    var i = n.indexOf(name);
    if(i == -1) return;
    if(s) e[i].setAttribute("data-active", "");
    else e[i].removeAttribute("data-active");
  },
  setOnPageNotFound(f) {
    this.nf = f;
  }
}

Dage._();
