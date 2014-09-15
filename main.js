var Victims = [];

var totalVictims = prompt('How many people got their shizzy wrecked?');

for (var i = 0; i < totalVictims; i++) {
	var newVictim = {
		name: prompt('Name?'),
		phonenum: prompt('Phone?'),
		street: prompt('Address?'),
	}
};

var totalVolunteers = prompt('How many people are ready to help?');

var listVictims = Victims["name"]

alert(totalVictims + totalVolunteers)