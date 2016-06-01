var local = require( './LocalStorage.js' );
var $ = require( 'jquery' );
module.exports = {
    cache: {},
    localStore: false,
    getCache: function ( prop, func, isPromise = false, isNotJSON = false ) {
        if ( prop in this.cache || ( local.supportsLocalStorage() && local.getItem( prop ) ) ) {
            if ( local.supportsLocalStorage() && local.getItem( prop ) ) {
                this.cache[ prop ] = isNotJSON ? local.getItem( prop ) : JSON.parse( local.getItem( prop ) );
            }
            return isPromise ? Promise.resolve( this.cache[ prop ] ) : this.cache[ prop ];
        }
        if ( !( func instanceof Function ) ) {
            this.warn( prop + " not cached yet!" );
            return Promise.reject( prop );
        }
        return func.call( this ).then( ( obj ) => {
            this.cache[ prop ] = isNotJSON ? obj : JSON.parse( obj );
            if ( local.supportsLocalStorage() && this.localStore ) {
                local.setItem( prop, obj );
            }
            return this.cache[ prop ];
        }, ( err ) => {
            this.logger( err, true );
            throw err;
        } );

    },
    sendToDataBase: function ( obj, urlEx ) {
        obj = $.extend( {
            type: "GET",
            dataType: "json",
            url: this.url + ( urlEx || "" )
        }, obj );
        return new Promise( ( resolve, reject ) => {
            $.ajax( obj ).then( ( r ) => {
                resolve( ( r ) );
            }, ( err ) => {
                console.group( "DataBase Error, '%s'ing '%s'", obj.type.toLowerCase(), urlEx );
                this.logger( JSON.parse( err ) );
                this.logger( obj, true );
                console.groupEnd();
                reject( err );
            } );
        } );
    }
};
