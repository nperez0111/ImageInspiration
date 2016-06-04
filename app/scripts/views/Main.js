var Base = require( './../ractives/Base.js' );
var Mason = require( './Masonry.js' );
module.exports = Base.extend( {
    template: require( './Main.ract' ).template,
    oninit: function () {
        this.on( "search", ( ev ) => {
            this.set( 'response', null ).then( () => {
                return this.getImage( this.get( 'query' ) ).then( this.logger, this.logger );
            } ).then( cur => {
                this.set( "response", cur );
                return cur;
            } ).then( this.removeCenter );

        } );

        this.observe( "images", ( newV, oldV ) => {
            if ( newV ) {
                if ( this.get( 'masonF' ) ) {
                    this.killMasonry();
                }
                this.set( 'mason', this.masonry() );
                this.set( 'masonF', true );
            }
        }, {
            defer: true
        } );
        this.passInstanceToMasonry();
        this.ifFail();
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
                    return $.extend( {
                        link: cur.link
                    }, cur.image );
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
    },
    masonry: function ( a ) {
        return Mason.init( ".result", ".imgWrap" );
    },
    killMasonry: function () {
        Mason.destroy();
    },
    passInstanceToMasonry: function () {
        Mason.instance = this;
    },
    ifFail: function () {
        Mason.failures = cur => {
            this.set( 'response.items.' + cur + '.link', this.set( 'response.items.' + cur + '.image.thumbnailLink' ) );
        }
    }
} );
