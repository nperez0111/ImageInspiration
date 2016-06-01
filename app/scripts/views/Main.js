var Base = require( './../ractives/Base.js' );
require( 'bootstrap-sass' );
module.exports = Base.extend( {
    template: require( './Main.ract' ).template,
    onrender: function () {
        $( '#test' ).modal( "show" );
    }
} );
