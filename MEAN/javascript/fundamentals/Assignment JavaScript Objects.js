// Challenge 1
// Print all of the students and their cohort.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// for(let j=0; j< students.length; j++){
// 	console.log(students[j]);
// }


// for(let i = 0; i < students.length; i++){
// 	for(let key in students[i]){
// 		let text ="";
// 		text += key + ": " + students[i][key];
// 		console.log(text);
// 	}
// }

for(var student in students){
	console.log("Name: "+students[student]['name']+", "+"Cohort: "+ students[student]['cohort']);
	console.log(students[student]);
}

// Challenge 2
// Print out the below object to match the example.
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

for(var u in users){
	console.log(u);
}


 for(var u in users){
 	if(u == "employees"){
 		console.log("EMPLOYEES");
 		for(var i =0; i < users[u].length; i++){
 			var text ="";
 			var name_length = users[u][i]["last_name"].length + users[u][i]["first_name"].length;
 			text += (i + " - " + users[u][i]["last_name"] + ", " + users[u][i]["first_name"] + " - " + name_length);
	 		console.log(text);
 		}
 	}if(u == "managers"){
 		console.log("MANAGERS");
 		for(var j =0; j < users[u].length; j++){
 			var text ="";
 			var name_length = users[u][j]["last_name"].length + users[u][j]["first_name"].length;
 			text += (j + " - " + users[u][j]["last_name"] + ", " + users[u][j]["first_name"] + " - " + name_length);
	 		console.log(text);
 		}
 	}
 }