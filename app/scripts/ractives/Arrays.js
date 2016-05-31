module.exports = {
    toArray: function ( possibleStr, delimiter ) {
        //http://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string
        return ( typeof possibleStr === 'string' || possibleStr instanceof String ) ? possibleStr.split( delimiter ) : possibleStr;

    },
    ifPassesDo: function ( arr, condition, doer ) {

        return arr.map( function ( cur, i ) {
            return condition( cur, i ) ? doer( cur, i ) : cur;
        } );

    }
};
