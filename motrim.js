/*
 * Copyright (c) 2015 Michael M. Ocana (me@michaelocana.com)
 *
 * jQuery moTrim plugin
 * Version 1.0 (September 2015)
 * https://github.com/michaelocana/motrim
 *
 * Licensed under the MIT License
 */

 /*global jQuery*/
(function($) {
  if ($.fn.motrim) {
    return;
  }
  $.fn.motrim = function(options) {
    var settings = $.extend({
        width: null,
        ellipsis: '...',
      }, options);

    return this.each(function() {
      var textContent = $(this).text();
      if (settings.width == null) {
        var parentWidth = $(this).parent().width();
      }
      else {
        var parentWidth = parseInt(settings.width);
      }
      $('<span id="guide" style="display: none; white-space: nowrap;"></span>').insertBefore(this);

      if ($(this).find('a').length) {
        $(this).find('a').html(doTrim(textContent, parentWidth));
      }
      else {
        $(this).html(doTrim(textContent, parentWidth));
      }
      $("#guide").remove();
    });

    function getTextWidth(textElement) {
      var ruler = $("#guide");
      ruler.empty();
      ruler.html(textElement);
      return ruler.width();
    }

    function doTrim(textContent, length) {
      var tmp = textContent;
      var trimmed = '';
      var splitContent = new Array();
      var newSplit = new Array();
      var index;
      if (getTextWidth(tmp) > length) {
        splitContent = tmp.trim().split(' ');
        newSplit = tmp.trim().split(' ');
        for (index = 0; index < splitContent.length; ++index) {
          trimmed = newSplit.join(' ');
          if (length > getTextWidth(trimmed + settings.ellipsis)) {
            break;
          }
          newSplit = trimmed.split(' ');
          newSplit.pop();
        }
        trimmed = trimmed + settings.ellipsis;
      }
      else {
        trimmed = textContent;
      }
      return trimmed;
    }
  }
})(jQuery);
