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

## Navigation
### Navigate to page
```js
Dage.navigate(name);
```

### Show a page
```js
Dage.show(name);
```

### Hide a page
```js
Dage.hide(name);
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

### Get all listener
```js
Dage.$;
```

## Handler
### Set show handler
```js
// fired when navigated and the current page matches the name
Dage.setShowHandler(function(el) {
  // default
  el.removeAttribute("hidden");
});
```

### Set hide handler
```js
// fired when navigated and the current page does not match the name
Dage.setHideHandler(function(el) {
  // default
  el.setAttribute("hidden", "");
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
