$(document).ready(function () {

	$("#jobs-output-page").hide();
	$("#job-details-screen").hide();
	$(".job-details-list").hide();
	$(".description-output").hide();
	$(".jumbotron").hide();
	

  //This is my API key:
  ApiKEY = "34c685494080bb76386590eb0d7c02f9";

  //variables to store user inputs for desired job type and city location

  //the cities added by the user need to be dumped into an array for local storage later.
  var savedCityArray = [];

  //the job types added by the user need to be dumpted into an array for local storage later.
  var resultsJobArray = [];
  var adzunaJobsArray = [];


  //When a user clicks the submit button then we run an AJAX call to search for those specific variables

  function runJobCitySearch() {
    var occupationInput = $(".occupation-input").val();
    var cityInput = $(".city-input").val();
    console.log(occupationInput);
    console.log(cityInput);

    var queryURL =
      "https://cors-anywhere.herokuapp.com/https://api.adzuna.com/v1/api/jobs/us/search/6?app_id=d279677d&app_key=" +
      ApiKEY +
      "&what=" +
      occupationInput +
      "&where=" +
      cityInput;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
	  console.log(response);

	  var jobObject = {
		company: response.results[i].company.display_name,
		position: response.results[i].title,
		city: response.results[i].location.area[3],
		state: response.results[i].location.area[1],
		description: response.results[i].description,
	  };

	  //console.log(jobObject);
	  adzunaJobsArray.push(jobObject);

      for (var i = 0; i <jobObject.length; i++) {
		var jobResultRowDiv = $("<div>");
		jobResultRowDiv.addClass("row justify-content-center");
		var cardJobEntryDiv = $("<div>");
		cardJobEntryDiv.addClass("col-md-4 border card jobEntry");
		var jobLogoOutput = $("<h4>");
		jobLogoOutput.addClass("job-logo-output");
		var occupationOutput = $("<p>");
		occupationOutput.addClass("occupation-output");
		var cityOutput = $("<p>");
		cityOutput.addClass("city-output");
		var stateOutput = $("<p>");
		stateOutput.addClass("state-output");
		var descriptionOutput = $("<p>");
		descriptionOutput.addClass("description-output");

		$(".job-logo-output").text(response.results[i].company.display_name);
		$(".occupation-output").text(response.results[i].title);
		$(".city-output").text(response.results[i].location.area[3]);
		$(".state-output").text(response.results[i].location.area[1]);
		$(".description-output").text(response.results[i].description);

		// cardJobEntryDiv.append(jobLogoOutput);
		// cardJobEntryDiv.append(occupationOutput);
		// cardJobEntryDiv.append(cityOutput);
		// cardJobEntryDiv.append(stateOutput);
		// cardJobEntryDiv.append(descriptionOutput);
		//jobResultRowDiv.append(cardJobEntryDiv);

		$("#jobs-output-page").append(jobResultRowDiv);
	  }
	  
	  
	
      // console.log(response);
      $(".city-input").empty();
	  $(".occupation-input").empty();
	  
    });
  };

  	//Add Event Listeners Here
  	$(".home-submit-button").on("click", function (event) {
		event.preventDefault();
		event.stopPropagation();
		$("#home-page").hide();
		$("#carouselExampleControls").hide();
		$("#jobs-output-page").show();
		$("#job-details-screen").hide();
		runJobCitySearch();
	});
	

  	// function createJobResultsDiv() {
	// 	for (var i = 0; i < jobObject.length; i++){
	// 		var jobObject = jobObject(i)

	// 	}


	  //}


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


});
