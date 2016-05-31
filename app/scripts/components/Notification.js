'use strict';

var Ractive = require('ractive/ractive.runtime');

var Notification = Ractive.extend({
  template: require('./notification.ract').template,
  isolated: false,
  beforeInit: function () {},
  init: function () {},
  data: {}
});

module.exports = Notification;
