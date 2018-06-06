// 3KxxEV9MbYDEjuGL9cikEtftIuTmH1on
$(document).ready(function() {

    var outdoors = [
        "mountain", "mountain bike", "downhill mountain biking", "camping", "tents", "hiking",
        "dirtbikes", "northern lights", "campfire", "smores", "jeeps",
        "backpacking", "off roading", "baja 1000"
    ];

    for(var i = 0; i < outdoors.length; i++) {
       var out = $('<button>');
        out.attr('data-type', outdoors[i]);
        out.text(outdoors[i]);
        out.addClass('outdoorButton');
        $('#outdoor-buttons').append(out);
    }

    $(document).on('click', '.outdoorButton', function(){
        var searchTerm = $(this).text();
        console.log(searchTerm);
        var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=3KxxEV9MbYDEjuGL9cikEtftIuTmH1on&limit=10";

        $.ajax({
          url: giphyURL,
          method: "GET"
        })
        .then(function(res){
            buildGiphy(res);
        });
    })
   
    function buildGiphy(res){
        for(var i = 0; i < res.data.length; i++){
            var gifWrapper = $('<div>');
            gifWrapper.addClass('gifWrapper');
            var gifTitle = $('<p>');
            gifTitle.addClass('gifTitle');
            var gif = $('<img>');
            gifTitle.text(res.data[i].title);
            gif.attr('src', res.data[i].images.fixed_height_small.url);
            gif.addClass('gifs');
            gifWrapper.append(gifTitle, gif);
            $('#outdoorGifs').prepend(gifWrapper);
            console.log(res);
        };
    };







});