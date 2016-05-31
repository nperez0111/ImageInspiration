'use strict';

var Ractive = require('ractive/ractive.runtime');

var Modal = Ractive.extend({
  template: require('./modal.ract').template,
  isolated: false,
  beforeInit: function () {},
  init: function () {},
  data: {}
});

module.exports = Modal;
