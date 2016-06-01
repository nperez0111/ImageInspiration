require( "remarkable-bootstrap-notify" );
module.exports = {
    clearNotifications: function () {
        this.notifications.forEach( ( a ) => {
            a.close();
        } );
        this.notifications = [];
    },
    notify: function ( title, message, time, typely ) {
        var not = $.notify( {
            title: title,
            message: message
        }, {
            type: typely || '',
            delay: ( time || 0 ) + 4000,
            placement: {
                from: "bottom",
                align: "right"
            },
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-minimalist alert-minimalist-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><img data-notify="icon" class="img-circle pull-left">' +
                '<span data-notify="title">{1}</span>' +
                '<span data-notify="message">{2}</span>' +
                '</div>'
        } );
        this.notifications.push( not );
        return not;
    },
    notifyError: function ( title, message, time ) {
        return this.notify( '<span class="glyphicon glyphicon-warning-sign"></span> ' + title, message, time, "error" );
    },
    notifyInfo: function ( title, message, time ) {
        return this.notify( '<span class="glyphicon glyphicon-info-sign"></span> ' + title, message, time, "info" );
    },
    notifyInfo: function ( title, message, time ) {
        return this.notify( '<span class="glyphicon glyphicon-info-sign"></span> ' + title, message, time, "info" );
    },
    notifyWarning: function ( title, message, time ) {
        return this.notify( '<span class="glyphicon glyphicon-exclamation-sign"></span> ' + title, message, time, "warning" );
    },
    notifications: [],
};
