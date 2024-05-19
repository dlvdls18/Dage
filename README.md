# :books: Dage

A simple and lightweight page router for your single-page-applications.

```html
<!-- Page 1 -->
<div data-page="page-1" data-active="">
  <p>You're currently in page 1</p>
  
  <!-- Navigate to page 2 -->
  <button data-navigate="page-2">Go to page 2</button>
  
  <!-- Does not exist -->
  <button data-navigate="page-3">Go somewhere</button>
</div>

<!-- Page 2 -->
<div data-page="page-2">
  <p>You're currently in page 2</p>
  
  <!-- Navigate back to page 1 -->
  <button data-navigate="page-2">Go back to page 1</button>
</div>

<!-- Fallback page -->
<div data-page="notfound">
  <p>Uh oh, page not found...</p>
</div>
```

# :package: Installation

```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/Dage/dist/dage.min.js"></script>
```

# Documentation: `HTML`

## Pages

To assign a page, add the attribute `data-page`.

```html
<div data-page="page-name"></div>
```

To show the page by default, add the attribute `data-active`.

```html
<div data-active="" data-page="page-name"></div>
```

## Navigators

To assign a navigator, add the attribute `data-navigate`.

```html
<button data-navigate="page-name"><button>
```

# Documentation: `Javascript`

## Pages

#### Add new page by element

```ts
Dage.add(HTMLElement: element);
```

#### Remove a page by element

```its
Dage.remove(HTMLElement: element);
```

#### Get current active page

```js
// String: page name
Dage.active;
```

#### Navigate through a page

```ts
Dage.navigate(String: page_name);
```

## Listeners

#### `onpagevisible` listener

This event is called when the page will be visible. It can be used to define how would the page appear when visible.

```js
Dage.pages["page_name"].onpagevisible = Function(page_name, instance);
```

#### `onpagehidden` listener

This event is called when the page will be hidden. It can be used to define how would the page appear when hidden.

```js
Dage.pages["page_name"].onpagehidden = Function(page_name, instance);
```

#### Set page listener

```ts
Dage.on("page_name", Function: callback);
```

#### Remove page listener

```ts
Dage.off("page_name");
```

#### `onchanged` listener

This event is called when navigated.

```ts
Dage.onchanged = Function(page_name, instance);
```
