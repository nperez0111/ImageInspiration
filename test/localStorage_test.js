'use strict';

var l = require( '../app/scripts/ractives/LocalStorage.js' );

describe( 'LocalStorage', function () {
    describe( 'supportsLocalStorage', function () {
        it( 'should be true', function () {
            expect( l.supportsLocalStorage() ).to.be.true;
        } );
    } );
    describe( '.getItem(key)', function () {
        it( 'Should return null if nothing set', function () {
            expect( l.getItem( "" ) ).to.be.null;
        } );
        it( 'Should return the key of what was set', function () {
            l.setItem( "key", "Value" );
            expect( l.getItem( "key" ) ).to.equal( "Value" );
        } );
    } );
    describe( '.setItem(key,Value)', function () {
        it( 'Should return true if set', function () {
            expect( l.setItem( "key", "value" ) ).to.be.true;
        } );
        it( 'Should set Values to LocalStorage', function () {
            l.setItem( "key", "Value" );
            expect( l.getItem( "key" ) ).to.equal( "Value" );
        } );
    } );
    describe( '.setObj(key,Obj)', function () {
        it( 'Should set Obj to LocalStorage', function () {
            l.setObj( "k", { ok: "test" } );
            expect( l.getItem( "k" ) ).to.equal( JSON.stringify( { ok: "test" } ) );
        } );
    } );
    describe( '.getObj(key)', function () {
        it( 'Should return the stored object as an object', function () {
            l.setObj( "k", { ok: "test" } );
            expect( l.getObj( "k" ) ).to.deep.equal( { ok: "test" } );
        } );
    } );
} );
