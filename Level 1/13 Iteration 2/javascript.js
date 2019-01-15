function append(){
	
let i;
for (i = 0; i<=10; i++) {

if (i % 2 == 0 && i != 0){
let elem = document.createElement('div');
elem.innerHTML = i;
document.body.appendChild(elem);
}
}
}
