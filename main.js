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

// var listVictims = Victims["name"]

// alert('There are ' + totalVictims + ' victims and ' + totalVolunteers + ' volunteers!');