module.exports = {
    debounce: ( t, r ) => {
        var e = null;
        return function () {
            var n = this,
                o = arguments;
            clearTimeout( e ), e = setTimeout( function () {
                t.apply( n, o )
            }, r )
        }
    },
    sequence: function () {
        return this.compose.apply( this, Array.from( arguments ).reverse() );
    },
    compose: function () {
        var fns = arguments;

        return function ( result ) {
            for ( var i = fns.length - 1; i > -1; i-- ) {
                result = fns[ i ].call( this, result );
            }

            return result;
        };
    },
    toggle: function ( keypath ) {
        this.set( keypath, !this.get( keypath ) );
    },
};
