$(document).ready(function(){
    //empty array for new searches
    var searchBox = [];

    $("button").on("click", defaultButtons);
   
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
                //variables related to still and animated:
                var animGiph = imageResults[i].images.fixed_width_small.url;
                var stillGiph = imageResults[i].images.fixed_width_small_still.url; 
                // add attrib to giph img for still and anim images
                giph.attr("data-still", stillGiph); //this is the default image when page loads
                giph.attr("data-anim", animGiph);
                // append rating and images to dynam. created gifDiv
                gifDiv.append(ratingP);
                gifDiv.append(giph);
                $("#returns").prepend(gifDiv);
            };
        });
    };
});

// create a function with an event handler that changes play/pauses gif on click of img
$(document).on("click", giph, function(){
    //use excercise pausing-gifs 06-3-15
    //or https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_attr_set
    var state = $(this).attr("data-still");

    if (state == data)

});

function newButtons(){
    //when searches button is clicked
    $("#searches").on("click", function(){
        //loop through the inputed value
        for (i=0; i< searchBox.length; i++){
        //dynamically create a button for the inputed value to be placed in
        var newSearch = $("<button>");
        newSearch.text(searchBox[i]);
        $("#empty-buttons-div").append(newSearch);
        };
    });
};

