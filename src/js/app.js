$(document).ready(function() {
	
	//function declarations

	function checkNav() {
	    var nav = $('.main-nav')
	    var anchor = nav.find('a');
	    var current = window.location.pathname.split('/')[1];

	    for (var i = 0; i < anchor.length; i++) {

	    	//this split is messy...doublecheck this works as intended in prod environment

	        if((anchor[i].href).split('/')[3] == current) {
	            anchor[i].className = "active";
	        }
	    }
	}

	//actual executions

	checkNav();
});