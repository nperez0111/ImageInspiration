var Base = require( './../ractives/Base.js' );

module.exports = Base.extend( {
    template: require( './Main.ract' ).template,
    oninit: function () {
        /*this.observe( "query", ( newV, oldV ) => {
            if ( !newV ) {
                return;
            }

            this.getImage( newV ).then( this.logger, this.logger ).then( cur => {
                this.set( "display", cur );
            } );
        } );*/
        this.on( "search", ( ev ) => {
            this.notify( "It Works", this.get( 'query' ) );
            /*this.getImage( this.get('query') ).then( this.logger, this.logger ).then( cur => {
                this.set( "display", cur );
            } );*/
            //$('body').removeClass('stillCenter');
        } );
    },
    data: function () {
        return {
            query: "",
            display: ""
        }
    }
} );
