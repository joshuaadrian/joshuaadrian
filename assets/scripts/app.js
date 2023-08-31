// Vendor Libraries

try {
  window.$ = window.jQuery = require('jquery');
} catch (e) {
  console.log(e);
}

jQuery(document).ready(function($) {

  // Components
  require('./components/swiper');

});