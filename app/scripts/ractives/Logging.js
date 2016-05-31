module.exports = {
    log: function ( a ) {
        console.log( a );
        return a;
    },
    warn: function ( a ) {
        console.warn( a );
        return a;
    },
    logger: function ( a, warning ) {
        if ( /unminified/.test( function () { /*unminified*/ } ) ) {
            if ( warning ) {
                console.warn( a );
            } else {
                console.trace( a );
            }
        }
        return a;
    }
};
