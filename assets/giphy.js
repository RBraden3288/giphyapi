$(document).ready(function(){
   
    function defaultButtons(){
        var sharkMovie = $(this).attr("data-movie");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            sharkMovie + "&api_key=7ALjpcA6joYJ1fRr976NxxNcLduZEWK2&limit=10";
        console.log(this);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response.data);

            var imageResults = response.data;

            for (var i=0; i<imageResults.length; i++){
                var gifDiv = $("<div id='returns'>");
                var rating = imageResults[i].rating;
                var ratingP = $("<p>").text("Rating: " + rating);
                // console.log(ratingP);
                var giph = $("<img>");
                var animGiph = imageResults[i].images.fixed_width_small.url;
                var stillGiph = imageResults[i].images.fixed_width_small_still.url;
                giph.attr("src", animGiph);  //Does the attribute need two arguments? Can I pass anim/still giphs in if statements separately? Does if statements for movement need to be a separate function?
                gifDiv.append(giph);
                gifDiv.append(ratingP);
                $("#returns").append(gifDiv);
            };
        });
    };

    $("button").on("click", defaultButtons);
})