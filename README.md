# jquery.motrim.js by Michael M. Ocana

## A very lightweight plugin jQuery that will trim long text by word.

### How to use the plugin
Include all nessesary .js-files inside the head-tag of the page.

```html
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="jquery.motrim.js" type="text/javascript"></script>
</head>
```

Create a DOM element and put some text and other HTML markup in this "wrapper".

In HTML :

```html
<div class="wrapper" style="width:400px">
  <div class="text-box">
    <a href="http://this.is.the.link">Lorem Ipsum is simply dummy text of the printing and typesetting</a>
  </div>
</div>

<div class="wrapper" style="width:400px">
  <div class="text-box-second">
    <a href="http://this.is.the.link">Lorem Ipsum is simply dummy text of the printing and typesetting</a>
  </div>
</div>
```

Fire the plugin onDocumentReady using the text-box selector.

without options :
*required parameter cut_by: (char/word)
```
$(document).ready(function() {
  $('.text-box').motrim({cut_by: 'char'});
  $('.text-box-second').motrim({cut_by: 'word'});
});
```

with parameter ellipsis option :
- *default ellipsis is "..."*
```
$(document).ready(function() {
  $('.text-box').motrim({cut_by: 'word', ellipsis: '>>>'});
  $('.text-box-second').motrim({cut_by: 'word', ellipsis: '...'});
});
```

with parameter width option :
- *if no width specified, the default width is based from the parent element*
```
$(document).ready(function() {
  $('.text-box').motrim({cut_by: 'word', width: '400px'});
});
```

with all the parameters :
```
$(document).ready(function() {
  $('.text-box').motrim({cut_by: 'word', width: '400px', ellipsis: '>>>'});
  $('.text-box-second').motrim({cut_by: 'word', width: '400px', ellipsis: '...'});
});
```

# Browser support

Compatible with All Browsers and IE7+.

# License

Unveil is licensed under the MIT license.
