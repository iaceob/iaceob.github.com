!(function (window, undefined) {
  'use strict';

  var $ = window.document;
  var console = window.console;
  var ix = 1;

  var demos = $.getElementsByClassName('enoa-demo');

  function showDemo(ix) {
    for (var i = demos.length; i-- > 0;) {
      var demo = demos[i];
      if (i === ix) {
        demo.className = demo.className + ' show';
        continue;
      }
      demo.className = demo.className.replace('show', '');
    }
  }

  window.setInterval(function () {
    showDemo(ix);
    ix = ix + 1 > 2 ? 0 : ix + 1;
  }, 5000);

})(window);
