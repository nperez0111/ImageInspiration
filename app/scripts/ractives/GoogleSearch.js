var params = {
    cx: "010218748759548229300%3Awdvrdgrcpqc",
    searchType: "image",
    key: "AIzaSyCHHyGomuVxh1CshSt6mDwhRJwi5BhtJow",
    fields: "items(displayLink%2CfileFormat%2ChtmlFormattedUrl%2ChtmlSnippet%2ChtmlTitle%2Cimage(contextLink%2Cheight%2CthumbnailHeight%2CthumbnailLink%2CthumbnailWidth%2Cwidth)%2Clabels%2Clink%2Cpagemap)%2Cqueries%2Cspelling",
};

module.exports = {
    oninit: function () {
        this.getImage( "art" ).then( this.logger, this.logger );
    },
    url: 'https://www.googleapis.com/customsearch/v1?' + Object.keys( params ).map( cur => {
        return cur + '=' + params[ cur ] + '&';
    } ).join( '' ),
    getImage: function ( query ) {
        return this.sendToDataBase( {}, 'q=' + query );
    },
};
