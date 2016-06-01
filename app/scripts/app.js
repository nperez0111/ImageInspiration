'use strict';
window.$ = require( 'jquery' );
window.jQuery = window.$;
require( './components/Modal.js' );
var Main = require( './views/Main.js' );
window.Main = new Main( { el: '.hook' } );
