# motrim.js by Michael M. Ocana

## A very lightweight plugin jQuery that will trim long text by word.

### How to use the plugin
Include all nessesary .js-files inside the head-tag of the page.

```html
<head>
    <script src="jquery.js" type="text/javascript"></script>
    <script src="motrim.js" type="text/javascript"></script>
</head>
```

Create a DOM element and put some text and other HTML markup in this "wrapper".

In HTML :

```html
<div class="wrapper" style="width:400px">
  <div class="text-box">
    <a href="http://this.is.the.link">Long message here will trim by words based on wrapper div</a>
  </div>
</div>
```

Fire the plugin onDocumentReady using the wrapper-selector.

without options :

```
$('.text-box').motrim();
```

with parameter ellipsis option :
- *default ellipsis is "..."*
```
$('.text-box').motrim({ellipsis: '>>>'});
```

with parameter width option :
- *if no width specified, the default width is based from the parent element*
```
$('.text-box').motrim({width: '400px'});
```

with 2 parameters :
```
$('.text-box').motrim({width: '400px', ellipsis: '>>>'});
```

# Browser support

Compatible with All Browsers and IE7+.

# License

Unveil is licensed under the MIT license.
