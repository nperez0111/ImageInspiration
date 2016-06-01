var Ractive = require( 'ractive/ractive.runtime' ),
    $ = require( 'jquery' );
var obj = [ require( './Networking.js' ), require( './Arrays.js' ), require( './Utilities.js' ), require( './Objects.js' ), require( './GoogleSearch.js' ) ].reduce( ( first, next ) => {
    return $.extend( first, next );
}, {} );
console.log( obj );
module.exports = Ractive.extend( obj );
