var Bricks = require( 'bricks.js' );
module.exports = {
    packer: null,
    options: {
        packed: 'data-packed',
        sizes: [ {
            columns: 2,
            gutter: 10
        }, {
            mq: '768px',
            columns: 3,
            gutter: 25
        }, {
            mq: '1024px',
            columns: 4,
            gutter: 50
        } ]
    },
    pack: function () {
        if ( this.packer ) {
            this.packer.pack();
            return this;
        }
        console.trace( "Called 'pack' before packer intitalized!" );
        return false;
    },
    update: function () {
        if ( this.packer ) {
            this.packer.update();
            return this;
        }
        console.trace( "Called 'update' before packer intitalized!" );
        return false;
    },
    init: function ( selector ) {
        this.packer = new Bricks( Object.assign( {
            selector: selector
        }, this.options ) );
        return this;
    },
    on: function ( which, handler ) {
        if ( this.packer ) {
            this.packer.on( which, handler );
            return this;
        }
        console.trace( "Set '" + which + "' before packer intitalized!" );
        return false;
    }
};
