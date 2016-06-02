module.exports = {
    supportsLocalStorage: function () {
        return 'localStorage' in window;
    },
    setItem: function ( key, val ) {
        if ( this.supportsLocalStorage() ) {
            localStorage.setItem( key, val );
            return true;
        }
        return false;
    },
    getItem: function ( key ) {
        return localStorage.getItem( key ) || null;
    },
    setObj: function ( key, val ) {
        if ( this.supportsLocalStorage() ) {
            localStorage.setItem( key, JSON.stringify( val ) );
            return true;
        }
        return false;
    },
    getObj: function ( key ) {
        if ( this.supportsLocalStorage() ) {
            return JSON.parse( localStorage.getItem( key ) );
        }
        return null;
    },
    clear: function () {
        if ( this.supportsLocalStorage() ) {
            localStorage.clear();
        }
    }
};
