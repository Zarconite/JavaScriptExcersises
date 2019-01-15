function append(){
	
let i;
for (i = 0; i<=10; i++) {
	
let elem = document.createElement('div');
elem.innerHTML = i;
document.body.appendChild(elem);

}
}
