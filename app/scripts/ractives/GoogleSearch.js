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
        var obj = Promise.resolve( JSON.parse( '{ "queries": { "request": [ { "title": "Google Custom Search - art", "totalResults": "3", "searchTerms": "art", "count": 3, "startIndex": 1, "inputEncoding": "utf8", "outputEncoding": "utf8", "safe": "off", "cx": "010218748759548229300:wdvrdgrcpqc", "searchType": "image" } ] }, "items": [ { "htmlTitle": "The <b>Art</b> of Refueling: Why You Need to Make a Habit of Practicing <b>...</b>", "link": "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/04/Art-Is-750x597.jpg", "displayLink": "www.shutterstock.com", "htmlSnippet": "<b>Art</b>-Is", "image": { "contextLink": "http://www.shutterstock.com/blog/the-art-of-refueling-why-you-need-to-make-a-habit-of-practicing-your-craft", "height": 597, "width": 750, "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6UxIDviS3xo3PQ24LmzH3uRtdWFcNPxfMe6DaeY-jneVATD3DYIfFnzQ", "thumbnailHeight": 112, "thumbnailWidth": 141 } }, { "htmlTitle": "Mastering the Mural: Illustrator Emily Balsley&#39;s Tips for <b>...</b>", "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/06/art-painting-sketch-368x368.jpg", "displayLink": "www.shutterstock.com", "htmlSnippet": "5 Reasons to Start an <b>Art</b>", "image": { "contextLink": "http://www.shutterstock.com/blog/mastering-mural-illustrator-emily-balsleys-tips-creating-wall-size-art", "height": 368, "width": 368, "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gB4LC5Bg-wgE2AZRvgie0jywsUo_EY16HVFid7CjCihYVdUdKtJIdA", "thumbnailHeight": 122, "thumbnailWidth": 122 } }, { "htmlTitle": "Illustrator Jessica Hagy Visualizes Sun Tzu&#39;s &#39;The <b>Art</b> of War&#39;", "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/11/%E2%80%A2%E2%80%A2-Art-of-War-Visualized-368x417.jpg", "displayLink": "www.shutterstock.com", "htmlSnippet": "The <b>Art</b> of War was written in", "image": { "contextLink": "http://www.shutterstock.com/blog/the-best-thing-i-ever-created-jessica-hagy-visualizes-the-art-of-war", "height": 417, "width": 368, "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95AWGxW49tXPtZFYmU5sQ23VixmEu6D5Bi1pK8u_2KexnZ3cERjjEUQ", "thumbnailHeight": 125, "thumbnailWidth": 110 } } ] }' ) );
        console.log( this.manip )

        //return this.sendToDataBase( {}, 'q=' + query );
        return obj;
    },
};
