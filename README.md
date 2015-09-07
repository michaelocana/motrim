# moTrim by Michael M. Ocana

jQuery moTrim will trim long text by word.

Usage :

In HTML :

```
<div class="wrapper" style="width:400px">
  <div class="text-box">
    <a href="http://this.is.the.link">Long message here will trim by words based on wrapper div</a>
  </div>
</div>
```

In script :

without options :

$('.text-box').motrim();

with ellipsis option :
- *default ellipsis is "..."*

$('.text-box').motrim({ellipsis: '>>>'});

with width option :
- *if no width specified, the default width is based from the parent element*

$('.text-box').motrim({width: '400px'});


with 2 options :

$('.text-box').motrim({width: '400px', ellipsis: '>>>'});
