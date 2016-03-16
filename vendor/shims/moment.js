(function() {
  function vendorModule() {
    'use strict';

    return { 'default': window['moment'] };
  }

  define('moment', [], vendorModule);
})();
