'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	console.log("Javascript is connected!");
}

$(".img-thumbnail").click(projectClick);

function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#7fff00")
	$(this).parent().next().toggle();
	console.log("It works!");
}

$(".nav-item").click(function(e) {
	$(this).toggleCLass("active").siblings().removeClass("active")
	console.log(toggle.class)
}
)
