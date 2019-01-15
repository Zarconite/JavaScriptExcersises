let array = ["NZXT", "Volvo", "Rubiks"];

function populate(){
document.getElementById('string').value = array;
}

function add(){
	let inputstring = document.getElementById('output').value;
	array.push(inputstring);
	populate();
}

function removeatid(){
	let id = document.getElementById('idinput').value;
	array.splice(id, 1);
	populate();
}