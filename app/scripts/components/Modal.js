'use strict';

var Ractive = require( 'ractive/ractive.runtime' );

var Modal = Ractive.extend( {
    template: require( './modal.ract' ).template,
    isolated: true
} );

module.exports = Modal;
