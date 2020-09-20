$(document).ready(function (){
    $("#jobs-output-page").hide();
    $("#job-details-screen").hide();

    var adzunaJobsArray = [];

function runHomeSearch () {
    var occupationInput = $("#occupation-input").val();
    var cityInput = $("#city-input").val();
    var apiKey = "34c685494080bb76386590eb0d7c02f9";
    var queryURL =
    "https://cors-anywhere.herokuapp.com/https://api.adzuna.com/v1/api/jobs/us/search/6?app_id=d279677d&app_key=" +
    apiKey +
    "&what=" +
    occupationInput +
    "&where=" +
    cityInput;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
//    console.log(response);
    for (var i = 0; i < 6; i++) {

        var jobObject = {
            company: response.results[i].company.display_name,
            position: response.results[i].title,
            city: response.results[i].location.area[3],
            state: response.results[i].location.area[1],
            description: response.results[i].description,
          };
      
          console.log(jobObject);
          adzunaJobsArray.push(jobObject);
          }
    }
  )};

function createJobCards () {

    
for (var t = 0; t < 6; t++) {


        var newRow = $("<div>").addClass("row");
        var newCol = $("<div>").addClass("col-lg-10");
        var newForm = $("<form>").addClass("jobs-output text-center");
        var newFormGroup = $("<div>").addClass("form-group");
        var newH1 = $("<h1>");
        var newH2 = $("<h2>");
        var newH3 = $("<h3>");
        var newP = $("<p>");
        // var newSaveBtn = $("<button>");
        var newDetailsBtn = $("<button>");
    
        newH1.text(adzunaJobsArray[t].company);
        newH2.text(adzunaJobsArray[t].position);
        newH3.text(adzunaJobsArray[t].city + ", " + adzunaJobsArray[t].state);
        newP.text(adzunaJobsArray[t].description);
        // newSaveBtn.text("Save");
        newDetailsBtn.text("Details");

        // newSaveBtn.addClass("btn btn-lg btn-info m-4 saveButton");
        newDetailsBtn.addClass("btn btn-lg btn-info m-4 detailsButton");


        $(".detailsButton").on("click", function (event) {
            event.preventDefault();
            $("#jobs-output-page").hide();
            $("#job-details-screen").show();
        });
        // $(".saveButton").on("click", function (event) {
        //     event.preventDefault();
        //     $("#jobs-output-page").hide();
        // });


        newFormGroup.prepend(newDetailsBtn);
        // newFormGroup.prepend(newSaveBtn);
        newFormGroup.prepend(newP);
        newFormGroup.prepend(newH3);
        newFormGroup.prepend(newH2);
        newFormGroup.prepend(newH1);
        newForm.append(newFormGroup);
        newCol.append(newForm);
        newRow.append(newCol);
        $("#jobs-output-page").append(newRow);
    }

}


$("#home-submit-button").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    runHomeSearch();
    createJobCards();
    $("#home-page").hide();
    $("#jobs-output-page").show();
});




});


//   $(".heart-job-icon").on("click", function (event) {
//     event.preventDefault();
//     var resultsSelectedCity = $(".location-output").val();
//     // get list of search terms from local storage
//     var resultsSelectedCities = localStorage.getItem(resultsSelectedCity);
//     // convert string to object - JSON.parse()
//     resultsSelectedCities = JSON.parse(resultsSelectedCity);
//     // unshift search term to put it at the front of the array
//     resultsSelectedCities.unshift(resultsSelectedCity);
//     // use JSON.stringify to turm the array back into a string
//     resultsSelectedCities = JSON.stringify(resultsSelectedCity);
//     // update localstorage
//     localStorage.setItem(".location-output", resultsSelectedCities);
//     abbrState(s);
//   });


	

//   function abbrState(input, to) {
//     var states = [
//       ["Arizona", "AZ"],
//       ["Alabama", "AL"],
//       ["Alaska", "AK"],
//       ["Arkansas", "AR"],
//       ["California", "CA"],
//       ["Colorado", "CO"],
//       ["Connecticut", "CT"],
//       ["Delaware", "DE"],
//       ["Florida", "FL"],
//       ["Georgia", "GA"],
//       ["Hawaii", "HI"],
//       ["Idaho", "ID"],
//       ["Illinois", "IL"],
//       ["Indiana", "IN"],
//       ["Iowa", "IA"],
//       ["Kansas", "KS"],
//       ["Kentucky", "KY"],
//       ["Louisiana", "LA"],
//       ["Maine", "ME"],
//       ["Maryland", "MD"],
//       ["Massachusetts", "MA"],
//       ["Michigan", "MI"],
//       ["Minnesota", "MN"],
//       ["Mississippi", "MS"],
//       ["Missouri", "MO"],
//       ["Montana", "MT"],
//       ["Nebraska", "NE"],
//       ["Nevada", "NV"],
//       ["New Hampshire", "NH"],
//       ["New Jersey", "NJ"],
//       ["New Mexico", "NM"],
//       ["New York", "NY"],
//       ["North Carolina", "NC"],
//       ["North Dakota", "ND"],
//       ["Ohio", "OH"],
//       ["Oklahoma", "OK"],
//       ["Oregon", "OR"],
//       ["Pennsylvania", "PA"],
//       ["Rhode Island", "RI"],
//       ["South Carolina", "SC"],
//       ["South Dakota", "SD"],
//       ["Tennessee", "TN"],
//       ["Texas", "TX"],
//       ["Utah", "UT"],
//       ["Vermont", "VT"],
//       ["Virginia", "VA"],
//       ["Washington", "WA"],
//       ["West Virginia", "WV"],
//       ["Wisconsin", "WI"],
//       ["Wyoming", "WY"],
//     ];
//     if (to == "abbr") {
//       input = input.replace(/\w\S*/g, function (txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//       });
//       for (i = 0; i < states.length; i++) {
//         if (states[i][0] == input) {
//           return states[i][1];
//         }
//       }
//     } else if (to == "name") {
//       input = input.toUpperCase();
//       for (i = 0; i < states.length; i++) {
//         if (states[i][1] == input) {
//           return states[i][0];
//         }
//       }
//     }
//   }
 
	 //var apartmentStateFromJob = response.results[0].location.area[1];
	 //var apartmentCityFromJob = response.results[0].location.area[3];

	// function realtorAPICall(){
	// 	var settings = {
	// 		async: true,
	// 		crossDomain: true,
	// 		url: "https://realtor.p.rapidapi.com/properties/v2/list-for-rent?sort=relevance&city=" + apartmentCityFromJob + "&state_code=" + apartmentStateFromJob + "&limit=6&offset=0",
	// 		method: "GET",
	// 		headers: {
	// 			"x-rapidapi-host": "realtor.p.rapidapi.com",
	// 			"x-rapidapi-key": "de31a49087msh7e6a19849d29566p11115ejsn6929dc4e049c",
	// 		},
	// 	};
	// 	$.ajax(settings).done(function (response) {
	// 		console.log(response);
	// 	});

	// 	abbrState(apartmentStateFromJob);
	// 	console.log(abbrState(apartmentStateFromJob));
  	// };

	//     //Add Event Listeners Here
  	// $(".home-submit-button").on("click", function (event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$("#home-page").hide();
	// 	$("#carouselExampleControls").hide();
	// 	$("#jobs-output-page").show();
	// 	runJobCitySearch();
	// });
	
	// $("#heart-icon").on("click", function () {
		//$("#jobs-output-page").hide();
		//$("#job-details-screen").show();
	//}); 
