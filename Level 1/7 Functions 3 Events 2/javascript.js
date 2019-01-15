let Person={name: "Stuart", age: 23, occupation: "Software Engineer"};

function populate(){
Person.name = document.getElementById('name').value;
Person.age = document.getElementById('age').value;
Person.occupation = document.getElementById('occupation').value;
document.getElementById('output').value = "Name: " + Person.name + ", Age: " + Person.age + ", occupation: " + Person.occupation;
}