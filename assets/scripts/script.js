
$(document).ready(function(){

//This is my API key:
ApiKEY = "34c685494080bb76386590eb0d7c02f9";

//variables to store user inputs for desired job type and city location


//the cities added by the user need to be dumped into an array for local storage later.
var savedCityArray = [];

//the job types added by the user need to be dumpted into an array for local storage later.
var savedJobArray = [];

//When a user clicks the submit button then we run an AJAX call to search for those specific variables

function runJobCitySearch(){
    var occupationInput = $(".occupation-input").val();
    var cityInput = $(".city-input").val();
    console.log(occupationInput);
    console.log(cityInput);
    
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.adzuna.com/v1/api/jobs/us/search/10?app_id=d279677d&app_key=" + ApiKEY + "&what=" + occupationInput + "&where=" + cityInput;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
    
        //DOM Elements
        console.log(response);
    });
    


};

//Add Event Listeners Here
$(".home-submit-button").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    runJobCitySearch();
    //$(".home-page").hide();
   // $(".jobs-output-page").show();
});

//$("#heart-icon").on("click", function () {
    
   // $("#jobs-output-page").hide();
   // $("#job-details-screen").show();
    
    
});


