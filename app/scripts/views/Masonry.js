var Mason = require( 'masonry-layout' ),
    imagesLoaded = require( 'imagesloaded' );
module.exports = {
    packer: null,
    options: {
        columnWidth: '.grid-sizer',
        percentPosition: true
    },
    pack: function () {
        if ( this.packer ) {
            this.packer.layout();
            return this;
        }
        console.trace( "Called 'pack' before packer intitalized!" );
        return false;
    },
    stamp: function ( el ) {
        if ( this.packer ) {
            this.packer.stamp( el );
            return this;
        }
        console.trace( "Called 'stamp' before packer intitalized!" );
        return false;
    },
    unStamp: function ( el ) {
        if ( this.packer ) {
            this.packer.unStamp( el );
            return this;
        }
        console.trace( "Called 'unStamp' before packer intitalized!" );
        return false;
    },
    append: function ( el ) {
        if ( this.packer ) {

            this.packer.appended( el );
        }
        console.trace( "Called 'append' before packer intitalized!" );
        return this;
    },
    init: function ( selector, itemSelector ) {
        if ( this.packer ) {
            return;
        }
        this.packer = new Mason( selector, Object.assign( {
            itemSelector: itemSelector
        }, this.options ) );

        $( itemSelector ).hide();
        imagesLoaded( selector ).on( 'progress', ( imageLoad, image ) => {
            var $item = $( image.img ).parents( itemSelector );
            // un-hide item
            $item.show();
            // masonry does its thing
            this.packer.appended( $item );
            //this.packer.layout();
        } );

        return this;
    },
    on: function ( handler ) {
        if ( this.packer ) {
            this.packer.on( 'layoutComplete', handler );
            return this;
        }
        console.trace( "Set handler before packer intitalized!" );
        return false;
    },
    destroy: function () {
        this.packer.destroy();
        this.packer = null;
        return true;
    }
};
