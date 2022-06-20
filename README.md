# Dage
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
<div data-page="page1" data-active>
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

