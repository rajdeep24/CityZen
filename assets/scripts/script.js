$(document).ready(function () {
	//This is my API key:
	ApiKEY = "34c685494080bb76386590eb0d7c02f9";

	//variables to store user inputs for desired job type and city location

	//the cities added by the user need to be dumped into an array for local storage later.
	var savedCityArray = [];

	//the job types added by the user need to be dumpted into an array for local storage later.
	var savedJobArray = [];
    var jobsArray = [];
	//When a user clicks the submit button then we run an AJAX call to search for those specific variables

	function runJobCitySearch() {
		var occupationInput = $(".occupation-input").val();
		var cityInput = $(".city-input").val();
		console.log(occupationInput);
        console.log(cityInput);
        
		var queryURL = "https://cors-anywhere.herokuapp.com/https://api.adzuna.com/v1/api/jobs/us/search/10?app_id=d279677d&app_key=" + ApiKEY + "&what=" + occupationInput + "&where=" + cityInput;

		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
            //DOM Elements
            

            for (var i = 0; i < 6; i++) {
                var jobObject = {
                    company: response.results[i].company.display_name,
                    position: response.results[i].title,
                    location: response.results[i].location.area[3],
                    description: response.results[i].description,
                };
                jobsArray.push(jobObject);
    
            };
            console.log(jobsArray);

			// console.log(response);
			$(".city-input").empty();
			$(".occupation-input").empty();
			//	var apartmentStateFromJob = response.mean.results[0].location.area[1];
			//	var apartmentCityFromJob = response.mean.results[0].location.area[3];
		});
	}

	//Add Event Listeners Here
	$(".home-submit-button").on("click", function (event) {
		event.preventDefault();
		event.stopPropagation();
		runJobCitySearch();
		var cityInputLS = $(".city-input").val();
		var occupationInputLS = $(".occupation-input").val();
		savedCityArray.push(cityInputLS);
		localStorage.setItem("city", savedCityArray);
		console.log(savedCityArray);
		savedJobArray.push(occupationInputLS);
		localStorage.setItem("occupation", savedJobArray);
		console.log(savedJobArray);
		//$(".home-page").hide();
		// $(".jobs-output-page").show();
	});

	// var settings = {
	// 		async: true,
	// 		crossDomain: true,
	// 		url: "https://realtor.p.rapidapi.com/properties/v2/list-for-rent?sort=relevance&city=New%20York%20Cit&state_code=NY&limit=200&offset=0",
	// 		method: "GET",
	// 		headers: {
	// 			"x-rapidapi-host": "realtor.p.rapidapi.com",
	// 			"x-rapidapi-key": "de31a49087msh7e6a19849d29566p11115ejsn6929dc4e049c",
	// 		},
	// 	};
	// 	$.ajax(settings).done(function (response) {
	// 		console.log(response);
	// 	});
	//$("#heart-icon").on("click", function () {

	// $("#jobs-output-page").hide();
	// $("#job-details-screen").show();
});
