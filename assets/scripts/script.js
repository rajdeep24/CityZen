


$("#home-submit-button").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    $("#home-page").hide();
    $("#jobs-output-page").show();
});

$("#heart-icon").on("click", function () {
    
    $("#jobs-output-page").hide();
    $("#job-details-screen").show();
    
    
});