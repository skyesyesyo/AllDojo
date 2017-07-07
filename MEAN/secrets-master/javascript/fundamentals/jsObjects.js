// Challenge One
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let i in students){
	console.log('Name:', students[i].name, 'Cohort:', students[i].cohort);
}

// Challenge Two
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(j in users){
 	if(j == 'employees'){
 		console.log('EMPLOYEES');
 		for(let i = 0; i < users[j].length; i++){
 			console.log(i + ' - ' +  users[j][i].last_name +  ', ' + users[j][i].first_name +  ' - ' + (users[j][i].first_name.length + users[j][i].last_name.length))
 		}
 	}
 }