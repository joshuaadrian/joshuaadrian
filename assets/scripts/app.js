import { scroller } from './components/scroller';
import { lazyload } from './components/lazyload';
import { photos } from './components/photos';

global.$ = global.jQuery;

$(() => {
  scroller();
  photos();
  lazyload();

  $('body').addClass('is-loaded');

});