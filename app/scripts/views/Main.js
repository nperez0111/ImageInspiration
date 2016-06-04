var Base = require( './../ractives/Base.js' );
var Mason = require( './Masonry.js' );
module.exports = Base.extend( {
    template: require( './Main.ract' ).template,
    oninit: function () {
        this.on( "search", ( ev ) => {
            return this.set( 'response', null ).then( () => {
                return this.getImage( this.get( 'query' ) ).then( this.logger, this.logger );
            } ).then( cur => {
                return this.set( "response", cur );
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

    },
    components: {
        Image: require( './../components/Images.js' ),
    },
    data: function () {
        return {
            query: "",
            response: {},
            elements: {
                wrap: '.result',
                selector: '.imgWrap'
            }
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
        this.passInstanceToMasonry();
        this.ifFail();
        return Mason.init( this.get( 'elements.wrap' ), this.get( 'elements.selector' ) );
    },
    killMasonry: function () {
        Mason.destroy();
    },
    passInstanceToMasonry: function () {
        Mason.instance = this;
    },
    getMason: function () {
        return Mason;
    },
    ifFail: function () {
        Mason.failures = ( cur, image ) => {
            $( $( this.get( 'elements.wrap' ) ).find( this.get( 'elements.selector' ) ).get( cur ) ).remove();
            var thumbNailProps = this.get( 'response.items.' + cur );
            var thumb = new module.exports( {
                data: function () {
                    thumbNailProps.link = thumbNailProps.image.thumbnailLink;
                    return {
                        response: {
                            items: [ thumbNailProps ]
                        }
                    }
                },
                oninit: function () {
                    console.log( 'got here' )
                },
                template: require( './image.ract' ).template,
            } );
            //some trickery https://github.com/desandro/masonry/issues/441
            var h = $( thumb.toHTML() );
            $( this.get( 'elements.wrap' ) ).append( h );
            return $( h );
        }
    }
} );
