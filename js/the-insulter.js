var decider = Math.random();

function insult() {
	name = prompt("What is your name?");
	insultDecider()
}

function insultDecider() {
	if (decider < 0.1) {
		document.getElementById("insultOutput").innerHTML = "I'm not saying I hate you " + name +", but I would unplug your life support to charge my phone."
	} else if (decider < 0.2) {
		document.getElementById("insultOutput").innerHTML = "Hey " + name + ", your birth certificate is an apology letter from the condom factory."
	} else if (decider < 0.3) {
		document.getElementById("insultOutput").innerHTML = "I wasn't born with enough middle fingers to let you know how I feel about you, " + name;
	} else if (decider < 0.4) {
		document.getElementById("insultOutput").innerHTML = "Hey " + name + ", is your ass jealous of the amount of shit that just came out of your mouth?";
	} else if (decider < 0.5) {
		document.getElementById("insultOutput").innerHTML = name + " you're so ugly, when your mom dropped you off at school she got a fine for littering.";	
	} else if (decider < 0.6) {
		document.getElementById("insultOutput").innerHTML = "The only way " + name + " will ever get laid is if she crawl up a chicken's ass and waited.";
	} else if (decider < 0.7) {
		document.getElementById("insultOutput").innerHTML = "Hey " + name + ", it looks like your face caught on fire and someone tried to put it out with a fork.";
	} else if (decider < 0.8) {
		document.getElementById("insultOutput").innerHTML =  name + ", you're so ugly Hello Kitty said goodbye to you.";
	} else if (decider < 0.9) {
		document.getElementById("insultOutput").innerHTML =  name + "'s family tree is a cactus, because everybody on it is a prick.";
	} else {
		document.getElementById("insultOutput").innerHTML =  name + ", its scary to think that they let people like you vote.";
	}	
}

function againagain() {
	decider = Math.random()
	insultDecider()
}