$(document).ready(function(){
  $.get("sentence.html", function(response) {
    $("#sentences").html(response);
  }).fail(function (error){
    console.log(error);
    $("#sentences").html('Error loading data:<br>'+JSON.stringify(error));
  });
});
