function append(){
	
let inputstring = document.getElementById('stringbox').value;

let triplecount = 0;
let character = inputstring[0];
let i;

for (i=0; i<inputstring.length; i++){
	character = inputstring[i];
if (character==inputstring[i+1] && character==inputstring[i+2]){
	triplecount++;
}
}
document.getElementById('outputbox').value = triplecount;
}
