module.exports = {
    cache: {},
    localStore: false,
    getCache: function ( prop, func, isPromise = false, isNotJSON = false ) {
        if ( prop in this.cache || ( localStorage && localStorage.getItem( prop ) ) ) {
            if ( localStorage && localStorage.getItem( prop ) ) {
                this.cache[ prop ] = isNotJSON ? localStorage.getItem( prop ) : JSON.parse( localStorage.getItem( prop ) );
            }
            return isPromise ? Promise.resolve( this.cache[ prop ] ) : this.cache[ prop ];
        }
        if ( !( func instanceof Function ) ) {
            this.warn( prop + " not cached yet!" );
            return Promise.reject( prop );
        }
        return func.call( this ).then( ( obj ) => {
            this.cache[ prop ] = isNotJSON ? obj : JSON.parse( obj );
            if ( this.localStore && localStorage ) {
                localStorage.setItem( prop, obj );
            }
            return this.cache[ prop ];
        }, ( err ) => {
            this.logger( err, true );
            throw err;
        } );

    },
    url: "",
    sendToDataBase: function ( obj, urlEx ) {
        obj = $.extend( {
            type: "GET",
            dataType: "json",
            url: this.url + ( urlEx || "" )
        }, obj );
        var that = this;
        return new Promise( ( resolve, reject ) => {
            $.ajax( obj ).then( ( r ) => {
                resolve( ( r.message ) );
            }, ( err ) => {
                console.group( "DataBase Error, '%s'ing '%s'", obj.type.toLowerCase(), urlEx );
                that.logger( err.responseText ? err.responseText : err, true );
                that.logger( obj, true );
                console.groupEnd();
                reject( err );
            } );
        } );
    }
};
