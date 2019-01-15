let Person={name: "Stuart", age: 23, occupation: "Software Engineer"};

function initialize(){
document.getElementById('name').value = Person.name;
document.getElementById('age').value = Person.age;
document.getElementById('occupation').value = Person.occupation;
}

function populate(){
Person.name = document.getElementById('name').value;
Person.age = document.getElementById('age').value;
Person.occupation = document.getElementById('occupation').value;
document.getElementById('output').value = "Name: " + Person.name + ", Age: " + Person.age + ", occupation: " + Person.occupation;

if (Person.age*1<=40 && Person.age*1>=20) {
	document.getElementById("truefalse").innerHTML = "Age is between 20 and 40";
} 
else {
	document.getElementById("truefalse").innerHTML = "Age is not between 20 and 40";
}
}