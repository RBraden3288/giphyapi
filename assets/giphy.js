//when search button is clicked
$("button").on("click", function(){
    // create a variable that will return searches to div "returns"
    var sharkMovie = $(this).attr("data-movie");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sharkMovie + "&api_key=7ALjpcA6joYJ1fRr976NxxNcLduZEWK2&limit=10";  //// the page should grab 10 gifs
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        //create a variable to hold STILL images
        var imageResults = response.data;

        //iterate through each resulting image
        for (var i = 0; i < imageResults.length; i++) {
            
            //create a div to hold each image and rating to be place in div 'id="returns"'
            var gifDiv = $("div");

            // grab ratings
            var rating = imageResults[i].rating;
            //create p tag to hold rating
            var ratingP = $("<p>").text("Rating: " + rating);
            console.log(ratingP);

            //create an image holder for still div
            var stillGiph = $("<img>");
            //define stillGiph variable with a src attribute and link still div
            stillGiph.attr("src", imageResults[i].images.fixed_width_still.url);

            //append rating and image to gifdiv
            gifDiv.append(stillGiph);
            gifDiv.append(ratingP);

            $("#returns").append(gifDiv); 
        }
        // $("#returns").empty();
        
        // 1.)
        //dynamically create a button

        // var resultsButton = $("<button>")
        //append button to <div id="topics-buttons">
            // $(this).prepend("#topics-button")
        //in that button log all searches
        //using a loop that appends a button for each string in the array.
        //populate those searches as indiv button on page


        //2.)
        // on click, place 10 gifs on the page.
        // on first click, the gifs should be static, non-animated gif images  
        // if still GIPHY is clicked the gif should animate. 
        // If the user clicks the gif again, it should stop playing

        // 3.
        // from the response data string .text each rating under gif

        // 4.
        // Each click shuold clear all data off screen prior to loading new click
   
    })
})

// 1. make button           ✓
// 2. click button
// 3. add button to screen
// 4. click other button
// 5. clear screen
// 4. click button again
// 5. load 10 still images  ✓
// 6. click on images
// 7. animate images
