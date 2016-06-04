'use strict';
//figure out how to display if the image is only a thumbnail
var Ractive = require( 'ractive/ractive.runtime' );

var Image = Ractive.extend( {
    template: require( './images.ract' ).template,
    isolated: true,
    computed: {
        url: {
            get: function () {
                return this.get( "ctx" ).link;
            }
        },
        width: {
            get: function () {
                return this.get( "ctx" ).width;
            }
        },
        height: {
            get: function () {
                return this.get( "ctx" ).height;
            }
        },
        ref: {
            get: function () {
                return this.get( "ctx" ).contextLink;
            }
        },
        dispLink: {
            get: function () {
                return this.get( "titles" ).displayLink;
            }
        },
        alt: {
            get: function () {
                return this.get( "titles" ).htmlTitle;
            }
        }
    }
} );

module.exports = Image;
