var Mason = require( 'masonry-layout' ),
    imagesLoaded = require( 'imagesloaded' );
module.exports = {
    packer: null,
    instance: null,
    options: {
        percentPosition: true,
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
        var imageLoded = imagesLoaded( selector );
        imageLoded.on( 'progress', ( imageLoad, image ) => {
            this.packer.layout();
        } );
        imageLoded.on( 'fail', ( instance, image ) => {
            //contains the index of the failed image
            var failedArr = instance.images.map( ( cur, i ) => {
                return !cur.isLoaded ? i : undefined
            } ).filter( ( cur ) => {
                return cur !== undefined;
            } );
            failedArr.forEach( this.failures );
        } );

        return this;
    },
    failures: function ( cur ) {
        console.log( cur );
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
    },
    refire: function ( event ) {
        if ( this.instance ) {
            this.instance.fire( event );
            return this;
        }
        console.trace( "Called fire event before instance intitalized!" );
        return false;
    }
};
