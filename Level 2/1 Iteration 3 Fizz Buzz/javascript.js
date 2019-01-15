function append(){
	
let i;
for (i = 0; i<=100; i++) {

if (i % 3 == 0 && i % 5 == 0 && i != 0){
let elem = document.createElement('div');
elem.innerHTML = "FizzBuzz";
document.body.appendChild(elem);
}
else if (i % 3 == 0 && i != 0){
let elem = document.createElement('div');
elem.innerHTML = "Fizz";
document.body.appendChild(elem);
}
else if (i % 5 == 0 && i != 0){
let elem = document.createElement('div');
elem.innerHTML = "Buzz";
document.body.appendChild(elem);
}
else {
let elem = document.createElement('div');
elem.innerHTML = i;
document.body.appendChild(elem);
}
}
}
