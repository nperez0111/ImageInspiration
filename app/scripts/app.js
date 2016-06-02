'use strict';
window.$ = require( 'jquery' );
window.jQuery = window.$;
require( './components/Modal.js' );
var Main = require( './views/Main.js' );
window.Router = require( './views/Router.js' );
Router.route( {
    Main: function () {
        return new Main( {
            el: '.hook'
        } );
    }
} );
Router.base( "Main" );
