# motrim
jQuery moTrim will trim text based on width by word

Usage :

In HTML :

<div class="wrapper" style="width:400px">
  <div class="text-box">
    <a href="http://this.is.the.link">Long message here will trim by words based on wrapper div</a>
  </div>
</div>

In script :

without options :

$('.text-box').motrim();

with ellipsis option :

$('.text-box').motrim({ellipsis: '>>>'});

with width option :

$('.text-box').motrim({width: '400px'});

with 2 options :

$('.text-box').motrim({width: '400px', ellipsis: '>>>'});
