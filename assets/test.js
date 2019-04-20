$(document).ready(function(){

    //empty array to hold search requests
    var newSearch = [];

    // 1. Displays the ten giphs for the default buttons on HTML
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
                var stillGiph = imageResults[i].images.fixed_width_small_still.url;
                giph.attr("src", stillGiph);  //Does the attribute need two arguments? Can I pass anim/still giphs in if statements separately? Does if statements for movement need to be a separate function?
                
                //empty returns div prior to appending new information
                // $("#topics", "#returns").empty();
                gifDiv.append(giph, ratingP);
                $("#returns").prepend(gifDiv);
            };
        });
    };
    
    // // 2. Add buttons for new search queries 
    //     $("#searches").on("click", function(event){
    //         event.preventDefault();
    //         $("#returns", "#topics").empty();
    //         var inputNew = $("#topics").val().trim();
    //         // pass the new searches into the default buttons function
    //         defaultButtons(inputNew);
    //     });
    
    function newButtons(){
        $("#searches").on("click", function(){
            for (i=0; i< newSearch.length; i++){
            var newSearch = $("<button>");
            newSearch.text($("#topics").val().trim());
            $("#empty-buttons-div").append(newSearch);
            };
        });
    };

    $("#default").on("click", defaultButtons);
    // $("#searches").on("click", newButtons);

        // function animate() {
        //     //when giph is clicked on change state to animate   
        //     var animGiph = imageResults[i].images.fixed_width_small.url;
        //     var stillGiph = imageResults[i].images.fixed_width_small_still.url;
        // if (giph == stillGiph) {
        //             $(this).attr('src', $(this).attr(animGiph));
        //                         // ^^target src attr (first argument), replace it with  data-animate attr
        //             $(this).attr('data-state', animGiph);
        //                         // ^^changing the data-state attr to animate
        //         }else{
        //             $(this).attr('src', $(this).attr(stillGiph));
        //             $(this).attr('data-state', stillGiph);   
        // } 
        // };

})
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
