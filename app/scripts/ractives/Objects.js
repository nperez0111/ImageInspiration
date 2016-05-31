module.exports = {
    makeObj: function ( keys, values ) {
        var ret = {};
        if ( Array.isArray( keys ) && Array.isArray( values ) ) {
            keys.forEach( ( cur, i ) => {
                ret[ cur ] = values[ i ];
            } );

        } else {
            ret[ keys ] = values;
        }
        return ret;
    },
    iterateOver: function ( obj, doThat ) {
        Object.keys( obj ).forEach( function ( cur, i ) {
            doThat( obj[ cur ], cur, obj );
        } );
        return Object.keys( obj );
    },
    pick: function ( obj, prop ) {
        if ( Array.isArray( prop ) ) {
            var ret = {};
            prop.forEach( ( cur, i, arr ) => {
                ret[ prop ] = obj[ prop ];
            } );
            return ret;
        }
        return obj[ prop ];
    },
};
