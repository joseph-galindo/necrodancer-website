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

	function init_rotations() {
		var current = window.location.pathname.split('/')[1];

		if(current === 'items.html') {

			//if items page, start a timer to flip through the obsidian states every second
			setInterval(function() {
				obs_rotation($('.obsidian_shovel'));
				obs_rotation($('.obsidian_torch'));
				obs_rotation($('.obsidian_armor'));
				obs_rotation($('.dagger.obsidian'));
				obs_rotation($('.longsword.obsidian'));
				obs_rotation($('.spear.obsidian'));
				obs_rotation($('.broadsword.obsidian'));
				obs_rotation($('.cat.obsidian'));
				obs_rotation($('.flail.obsidian'));
				obs_rotation($('.whip.obsidian'));
				obs_rotation($('.bow.obsidian'));
				obs_rotation($('.rapier.obsidian'));

				xbow_rotation($('.xbow.base'));
				xbow_rotation($('.xbow.blood'));
				xbow_rotation($('.xbow.gold'));
				xbow_rotation($('.xbow.tit'));
				xbow_rotation($('.xbow.glass'));
				xbow_rotation($('.lute'));

				obsxbow_rotation($('.xbow.obsidian'));

				guns_rotation($('.blunderbuss'));
				guns_rotation($('.rifle'));
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
	function xbow_rotation(elem) {

		//we are on 1shot loaded, go to 2shots loaded
		if(elem[0].className.indexOf("oneloaded") >= 0) {
			elem[0].className = elem[0].className.replace("oneloaded","twoloaded");
			return;
		} else if(elem[0].className.indexOf("twoloaded") >= 0) {
			//we are on 2shots loaded, go to 3shots loaded
			elem[0].className = elem[0].className.replace("twoloaded","threeloaded");
			return;
		} else if(elem[0].className.indexOf("threeloaded") >= 0) {
			//we are on 3shots loaded, go to 0shots loaded
			elem[0].className = elem[0].className.replace("threeloaded","");
			return;
		} else {
			//we are on 0shots loaded, go to 1shots loaded
			elem[0].className += " oneloaded";
			return;
		}
	}

	function obsxbow_rotation(elem) {

		//we are on 1shot loaded, go to 2shots loaded
		if(elem[0].className.indexOf("oneloaded") >= 0) {
			console.log(1);
			elem[0].className = elem[0].className.replace("oneloaded","twoloaded");
			return;
		} else if(elem[0].className.indexOf("twoloaded") >= 0) {
			//we are on 2shots loaded, go to 3shots loaded
			console.log(2);
			elem[0].className = elem[0].className.replace("twoloaded","threeloaded");
			return;
		} else if(elem[0].className.indexOf("threeloaded") >= 0) {
			//we are on 3shots loaded, go to 0shots loaded
			console.log(3);
			elem[0].className = elem[0].className.replace("threeloaded","lv2a");
			return;
		} else if(elem[0].className.indexOf("lv2a") >= 0) {
			//we are on 2shots loaded, go to 3shots loaded
			console.log(4);
			elem[0].className = elem[0].className.replace("lv2a","lv2b");
			return;
		} else if(elem[0].className.indexOf("lv2b") >= 0) {
			//we are on 3shots loaded, go to 0shots loaded
			console.log(5);
			elem[0].className = elem[0].className.replace("lv2b","lv2c");
			return;
		} else if(elem[0].className.indexOf("lv2c") >= 0) {
			//we are on 3shots loaded, go to 0shots loaded
			console.log(6);
			elem[0].className = elem[0].className.replace("lv2c","lv2d");
			return;
		} else if(elem[0].className.indexOf("lv2d") >= 0) {
			//we are on 3shots loaded, go to 0shots loaded
			console.log(7);
			elem[0].className = elem[0].className.replace("lv2d","lv3a");
			return;
		} else if(elem[0].className.indexOf("lv3a") >= 0) {
			//we are on 3shots loaded, go to 0shots loaded
			console.log(8);
			elem[0].className = elem[0].className.replace("lv3a","lv3b");
			return;
		} else if(elem[0].className.indexOf("lv3b") >= 0) {
			//we are on 3shots loaded, go to 0shots loaded
			console.log(9);
			elem[0].className = elem[0].className.replace("lv3b","lv3c");
			return;
		} else if(elem[0].className.indexOf("lv3c") >= 0) {
			//we are on 3shots loaded, go to 0shots loaded
			console.log(10);
			elem[0].className = elem[0].className.replace("lv3c","lv3d");
			return;
		} else if(elem[0].className.indexOf("lv3d") >= 0) {
			//we are on 3shots loaded, go to 0shots loaded
			console.log(11);
			elem[0].className = elem[0].className.replace("lv3d","");
			return;
		} else {
			//we are on 0shots loaded, go to 1shots loaded
			console.log(12);
			elem[0].className += " oneloaded";
			return;
		}
	}

	function guns_rotation(elem) {
				//we are on lvl2 obs, go to lvl3
		if(elem[0].className.indexOf("two") >= 0) {
			elem[0].className = elem[0].className.replace("two","");
			return;
		} else {
			//we are on lvl1 obs, go to lvl2
			elem[0].className += " two";
			return;
		}
	}

	//actual executions

	checkNav();
	init_rotations();
});