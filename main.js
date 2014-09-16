var victims = [];

var totalVictims = prompt('How many people got their shizzy wrecked?');

for (var i = 0; i < totalVictims; i++) {
	var newVictim = {
		name: prompt('Name?'),
		phonenum: prompt('Phone?'),
		street: prompt('Address?'),
	}
	victims.push(newVictim);
};


console.log(victims);

var volunteers = [];

var totalVolunteers = prompt('How many people are ready to help?');

for (var i = 0; i<totalVolunteers; i++){
	var newVolunteer = {
		name: prompt('Name?'),
		phonenum: prompt('Phone?'),
		street: prompt('Address?'),
	}
	volunteers.push(newVolunteer);
};

console.log(volunteers);

var viclist ='';



for (var i = 0; i < totalVictims; i++){
	viclist += victims[i]["name"] + ' ';
};

console.log(viclist);

var volList = '';

for (var i = 0; i < totalVolunteers; i++){
	volList += volunteers[i]["name"] + ' ';
};

console.log(volList);

alert('There are ' + totalVictims + ' victims and ' + totalVolunteers + ' volunteers!' + 
	'The victims are ' + viclist + ' and the volunteers are ' + volList);