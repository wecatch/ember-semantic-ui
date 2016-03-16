(function() {
  function vendorModule() {
    'use strict';

    return { 'default': window['Pikaday'] };
  }

  define('pikaday', [], vendorModule);
})();
