/* eslint-disable no-undef */
/* eslint-disable no-console */


$(document).ready(function(){
	$(".devour-burger").on("click", function(event){
		event.preventDefault();
		console.log("clicked");
		var newDevouredState = {
			name: $(this).attr("data-name"),
			id: $(this).attr("data-id"),
			devoured: 1,
		};
		console.log(newDevouredState);
		$.ajax("/api/burgers/", {
			type: "PUT",
			dataType: "json",
			data: newDevouredState 
		}).then(function(){
			console.log("updated");
			location.reload();
		});
	});
  

	$("#addBurger").on("click", function(event){
		event.preventDefault();
		var burgName = $("#newBurger").val();
		var newBurger = {
			burger_name: burgName,
			devoured: 0
		};
		console.log(newBurger);
		//do I need to put an action in the html???
		$.post("/api/burgers", newBurger, function(){
			console.log("posted");
			location.reload();
		});
	});
});
