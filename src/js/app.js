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

	function init_obs_rotation() {
		var current = window.location.pathname.split('/')[1];

		if(current === 'items.html') {

			//if items page, start a timer to flip through the obsidian states every second
			setInterval(function() {
				obs_rotation($('.obsidian_shovel'));
			},1000);
		}
	}

	function obs_rotation(elem) {

		//we are on lvl2 obs, go to lvl3
		if(elem[0].className.indexOf("two") >= 0) {
			elem[0].className = elem[0].className.replace("two","three");
			return;
		} else if(elem[0].className.indexOf("three") >= 0) {
			//we are on lvl3 obs, go to lvl1
			elem[0].className = elem[0].className.replace("three","");
			return;
		} else {
			//we are on lvl1 obs, go to lvl2
			elem[0].className += " two";
			return;
		}
	}

	//actual executions

	checkNav();
	init_obs_rotation();
});