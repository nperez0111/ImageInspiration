var Ractive = require( 'ractive/ractive.runtime' ),
    $ = require( 'jquery' );

module.exports = Ractive.extend( [ require( './Networking.js' ), require( './Arrays.js' ), require( './Utilities.js' ), require( './Objects.js' ), require( './GoogleSearch.js' ), require( './Logging.js' ) ].reduce( ( first, next ) => {
    return $.extend( first, next );
}, {} ) );
