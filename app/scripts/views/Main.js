var Base = require( './../ractives/Base.js' );

module.exports = Base.extend( {
    template: require( './Main.ract' ).template,
    oninit: function () {
        this.on( "search", ( ev ) => {
            this.getImage( this.get( 'query' ) ).then( this.logger, this.logger ).then( cur => {
                this.set( "response", cur );
                return cur;
            } ).then( this.removeCenter );

        } );
    },
    components: {
        Image: require( './../components/Images.js' ),
    },
    data: function () {
        return {
            query: "",
            response: {}
        }
    },
    computed: {
        images: {
            get: function () {
                return this.get( "response.items" ).map( ( cur ) => {
                    return $.extend( { link: cur.link }, cur.image );
                } );
            }
        },
        titles: {
            get: function () {
                return this.get( "response.items" ).map( cur => {
                    return $.extend( this.pick( cur.image, [ "contextLink" ] ), this.pick( cur, [ "htmlTitle", "displayLink" ] ) );
                } );
            }
        }
    },
    removeCenter: function ( a ) {
        //on search move search to top
        $( 'body' ).removeClass( 'stillCenter' );
        return a;
    }
} );
