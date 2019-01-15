let Person={name: "Stuart", age: 23, occupation: "Software Engineer"};

function populate(){
document.getElementById('name').value = Person.name;
document.getElementById('age').value = Person.age;
document.getElementById('occupation').value = Person.occupation;
}

function addonetoage(){
	Person.age++;
	populate();
}