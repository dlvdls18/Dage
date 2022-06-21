# Dage

![Dage](dage.png)

Basic HTML &amp; JavaScript Page Management.
Use `Dage` to your Single Page Application (SPA) easily.

`Dage` is a simple router-like page management which is useful for **SPA**.
Navigate to any page with custom handler (attribute "hidden" by default) and listener.

```js
Dage.add("page1", ...);
Dage.add("page2", ...);
Dage.on("page2", function(el) {
  alert("Navigated to page2");
});
Dage.navigate("page2");
```

Manage pages without JavaScript? No problem.

```html
<div data-page="page1" data-active="">
  Page 1...
  <button data-navigate="page2">Go to page 2</button>
</div>
<div data-page="page2">
  Page 2...
  <button data-navigate="page2">Go back to page 1</button>
</div>
```

# Installation
```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/Dage/src/dage.js"></script>
```

# Documentation
### Get version
```js
Dage.ver;
```

## Page
### Assigning element as page
```html
<div data-page="MyPage">
  Hello
</div>
```

### Show the element by default
```html
<div data-page="MyPage" data-active="">
  Hello
</div>
```

### Add a page
```js
Dage.add(element, name);
```

### Reselect and update all `data-page` and `data-navigate` &amp; set all pages default visibility
```js
Dage.update();
```

### Get all pages that assigned using `Dage.add`
```js
Dage.l;
```

### Get active page
```js
Dage.a;
```

## Navigation
### Navigate to page
```js
Dage.navigate(name);
```

### Show a page
```js
// Active page will not change when using this method
Dage.show(name);
```

### Hide a page
```js
Dage.hide(name);
```

### Get all pages
```js
Dage.p;
```

### Listener
### Add page listener
```js
// will not fired when silent
Dage.on(name, function(el) {
  ...
});
```

### Remove page listener
```js
Dage.off(name);
```

### Turn silent on
```js
Dage.silent();
```

### Turn silent off
```js
Dage.notify();
```

### Get silent state
```js
Dage.isSilent();
```

### Toggle silent state
```js
(Dage.isSilent()?Dage.notify():Dage.silent());
```

### Get all listener
```js
Dage.$;
```

### Set on navigate before listener
```js
// will not fired when silent
Dage.setBeforeChange(function(name) {});
```

### Set on navigate after listener
```js
// will not fired when silent
Dage.setAfterChange(function(name) {});
```

### Set on `Dage.show` listener
```js
Dage.setOnShow(function(name) {});
```

### Set on `Dage.hide` listener
```js
Dage.setOnHide(function(name) {});
```

### Get on navigate before listener
```js
Dage.ocb;
```

### Get on navigate after listener
```js
Dage.oca;
```

### Get on `Dage.show` listener
```js
Dage.os;
```

### Get on `Dage.hide` listener
```js
Dage.oh;
```

## Handler
### Set show handler
```js
// fired when navigated and the current page matches the name
Dage.setShowHandler(function(el) {
  // default
  el.style.display = "block";
});
```

### Set hide handler
```js
// fired when navigated and the current page does not match the name
Dage.setHideHandler(function(el) {
  // default
  el.style.display = "none";
});
```

### Get show handler
```js
Dage.f1;
```

### Get hide handler
```js
Dage.f0;
```

### Set navigation handler
```js
Dage.setNavigationHandler(function(el) {
  // default
  // navigate when element with attribute data-navigate clicked
  el.addEventListener("click", function(e) {
    Dage.navigate(e.target.getAttribute("data-navigate"));
  });
});
```

### Get navigation handler
```js
Dage.nh;
```
