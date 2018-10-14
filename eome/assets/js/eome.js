!(function (window, undefined) {
  'use strict';

  var $ = window.document;
  var console = window.console;
  var ix = 1;
  var version = '1.6.2';
  var wikis = [
    {
      url: 'https://doc.enoa.io/' + version + '/zh-tw',
      lang: '中文 (正體)'
    },
    {
      url: 'https://doc.enoa.io/' + version + '/zh-cn',
      lang: '中文 (简体)'
    }
  ];

  var docslangs = [
    {
      url: 'https://enoa.io/index.html',
      lang: 'English'
    },
    {
      url: 'https://enoa.io/zh-tw/index.html',
      lang: '中文 (正體)'
    },
    {
      url: 'https://enoa.io/zh-cn/index.html',
      lang: '中文 (简体)'
    }
  ];

  function fillVersion() {
    var v = $.getElementById('version');
    v.innerText = version;
  }

  function fillList(id, data) {
    var target = $.getElementById(id);
    var rets = [];
    for (var i = 0; i < data.length; i++) {
      var wk = data[i];
      var it = '<li><a href="' + wk.url + '">' + wk.lang + '</a></li>';
      rets.push(it);
    }
    target.innerHTML = rets.join('');
  }

  fillVersion();
  fillList('wiki', wikis);
  fillList('lang', docslangs);

})(window);
