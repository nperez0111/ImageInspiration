'use strict';

var Ractive = require( 'ractive/ractive.runtime' );
require( 'bootstrap-sass' );

var Modal = Ractive.extend( {
    template: require( './modal.ract' ).template,
    isolated: true
} );

Ractive.components.Modal = Modal;

module.exports = Modal;
