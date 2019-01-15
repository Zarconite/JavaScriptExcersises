function append(){
	
let inputnumber = document.getElementById('number').value;

while (inputnumber != 1){

if (inputnumber % 3 == 1){
let elem = document.createElement('div');
elem.innerHTML = inputnumber + " - 1 = " + (inputnumber=inputnumber-1) ;
document.body.appendChild(elem);
}
else if (inputnumber % 3 == 2){
let elem = document.createElement('div');
elem.innerHTML = inputnumber + " + 1 = " + (inputnumber=(inputnumber*1)+1) ;
document.body.appendChild(elem);
}
else if (inputnumber % 3 == 0){
let elem = document.createElement('div');
elem.innerHTML = inputnumber + " / 3 = " + (inputnumber=inputnumber/3) ;
document.body.appendChild(elem);
}
}
}
