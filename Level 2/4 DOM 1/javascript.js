let pid;
let i=0;
function newpara(){
let para = document.createElement('p');
para.setAttribute("id", "p"+i);
para.innerHTML='&nbsp;';
pid = "p"+i;
document.body.appendChild(para);
document.getElementById(pid).style.backgroundColor = '#ddd';
i++
}
function texttopara(){
	document.getElementById(pid).innerHTML = document.getElementById('inputbox').value;
}
function deletepara(){
	if(i*1>0){
	i=i*1-1;
	pid = "p"+i;
	let p = document.getElementById(pid);
    p.parentNode.removeChild(p);
	}
}
