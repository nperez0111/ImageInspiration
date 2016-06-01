'use strict';
require( './components/Modal.js' );
window.$ = require( 'jquery' );
window.jQuery = window.$;
var Main = require( './views/Main.js' );
window.Main = new Main( { el: '.hook' } );
