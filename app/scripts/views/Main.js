var Base = require( './../ractives/Base.js' );

module.exports = Base.extend( {
    template: require( './Main.ract' ).template,
    onrender: function () {
        $( '#test' ).modal( "show" );
    }
} );
