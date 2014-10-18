function showValue(id,value) {
	document.getElementById(id).innerHTML=value;
}
function setSlider(slider_id,value_id,value) {
	document.getElementById(slider_id).value=value;
	showValue(value_id,value);
}
function initSliders() {
	var san_value = 3;
	var food_value = 3;
	var rep_value = 3;
	setSlider("san_slider","san_value",san_value);
	setSlider("food_slider","food_value",food_value);
	setSlider("rep_slider","rep_value",rep_value);
}
//		initSliders();

var box = document.querySelector('.cube_container').children[0];
var panelClassName = 'show-front';
var cubeClasses = ["show-front","show-back","show-right","show-left","show-top","show-bottom"];
var action_buttons = document.getElementById('action-buttons');
var action_outcome = document.getElementById('action-outcome');
var action_outcome_text = document.getElementById('action-outcome-text');
var action_outcome_stats = document.getElementById('action-outcome-stats');

function shuffleArray(array) {
	var shuffled_array = [];
	while (array.length > 0) {
		var index = Math.floor(Math.random()*array.length)
		shuffled_array.push(array.splice(index,1));
	}
	return shuffled_array;
}

function startRoll() {
	var classes = cubeClasses.slice(0); // copy of the cubeClasses array
	rollDie(shuffleArray(classes));			
}

function rollDie(classes) {
	panelClassName = classes[0];
	box.className = panelClassName;
	if (classes.length > 1) {
		setTimeout(function(){rollDie(classes.slice(1,classes.length+1))},150);	
	}
}

function seminar() {
	action_buttons.className = 'hidden';
	action_outcome.className = 'main_section with_border';
	action_outcome_text.innerHTML = 'You attend a seminar.';
	action_outcome_stats.innerHTML = '...';
	startRoll();
	setTimeout(function() {
		var number = 0;
		for (var i = 0; i < cubeClasses.length; i++) {
			if (box.className == cubeClasses[i]) {
				number = i+1;
				break;
			}
		}
		if (number <= 2) {
			action_outcome_text.innerHTML = "You attend a seminar and it's OK.";
			action_outcome_stats.innerHTML = "+1 food";
		} else if (number <= 4) {
			action_outcome_text.innerHTML = "You attend a seminar and you fall asleep.";
			action_outcome_stats.innerHTML = "+1 food, -1 reputation";
		} else {
			action_outcome_text.innerHTML = "You attend a seminar and it's sooo boring.";
			action_outcome_stats.innerHTML = "+1 food, -1 sanity";
		}
	}, 1000);
}

function work() {
	action_buttons.className = 'hidden';
	action_outcome.className = 'main_section with_border';
	action_outcome_text.innerHTML = 'You sit at your desk.';
	action_outcome_stats.innerHTML = '...';
	startRoll();
	setTimeout(function() {
		var number = 0;
		for (var i = 0; i < cubeClasses.length; i++) {
			if (box.className == cubeClasses[i]) {
				number = i+1;
				break;
			}
		}
		if (number <= 2) {
			action_outcome_text.innerHTML = 'You sit at your desk and eat all the food you stored for days like today.';
			action_outcome_stats.innerHTML = '+1 reputation, -1 food';
		} else if (number <= 4) {
			action_outcome_text.innerHTML = 'You sit at your desk and actually get some work done.';
			action_outcome_stats.innerHTML = '+1 reputation';
		} else {
			action_outcome_text.innerHTML = 'You sit at your desk until you realise it\'s Sunday.';
			action_outcome_stats.innerHTML = '+1 reputation, -1 sanity';
		}
	}, 1000);
}

function sick() {
	action_buttons.className = 'hidden';
	action_outcome.className = 'main_section with_border';
	action_outcome_text.innerHTML = 'You take a sick day.';
	action_outcome_stats.innerHTML = '...';
	startRoll();
	setTimeout(function() {
		var number = 0;
		for (var i = 0; i < cubeClasses.length; i++) {
			if (box.className == cubeClasses[i]) {
				number = i+1;
				break;
			}
		}
		if (number <= 2) {
			action_outcome_text.innerHTML = 'You take a sick day and eat all your food, just because you are bored.';
			action_outcome_stats.innerHTML = '+1 sanity, -1 food';
		} else if (number <= 4) {
			action_outcome_text.innerHTML = 'You take a sick day, but everyone thinks you are faking it.';
			action_outcome_stats.innerHTML = '+1 sanity, -1 reputation';
		} else {
			action_outcome_text.innerHTML = 'You take a sick day and relax at home.';
			action_outcome_stats.innerHTML = '+1 sanity';
		}
	}, 1000);
}

function ok() {
	action_outcome.className = 'hidden';
	action_buttons.className = 'main_section with_border';
}

function colorchange(elmnt_on,elmnt_off1,elmnt_off2,elmnt_off3,elmnt_off4,elmnt_off5,elmnt_off6, clr) {
	elmnt_on.style.color = clr;
 	elmnt_off1.style.color = 'grey';
 	elmnt_off2.style.color = 'grey';
 	elmnt_off3.style.color = 'grey';
 	elmnt_off4.style.color = 'grey';
	elmnt_off5.style.color = 'grey';
 	elmnt_off6.style.color = 'grey';
}

function initValues() {
	food_3.style.color = 'green';
	rep_3.style.color = 'purple';
	san_3.style.color = 'MediumVioletRed';
	rep_0.style.color = 'grey';
	san_0.style.color = 'grey';
	food_0.style.color = 'grey';
	rep_1.style.color = 'grey';
	san_1.style.color = 'grey';
	food_1.style.color = 'grey';
	rep_2.style.color = 'grey';
	san_2.style.color = 'grey';
	food_2.style.color = 'grey';
	rep_4.style.color = 'grey';
	san_4.style.color = 'grey';
	food_4.style.color = 'grey';
	rep_5.style.color = 'grey';
	san_5.style.color = 'grey';
	food_5.style.color = 'grey';
	rep_6.style.color = 'grey';
	san_6.style.color = 'grey';
	food_6.style.color = 'grey';
}

initValues();
