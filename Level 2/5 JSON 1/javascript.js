function getText(){
    // read text from URL location
	let jsondata;
    let request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
					jsondata = request.responseText;
					document.getElementById('inputbox').value = jsondata;
					let array = jsondata.split("{");
					let txt;
					let i;
					/*array[array.length] = array[array.length]+"</table>";*/
					for (i=0; i<array.length; i++){
						array[i] = "<tr>"+array[i];
						array[i] = array[i]+"</tr>";
						array[i] = replaceAll(array[i],',', "</tr><tr>");
						array[i] = replaceAll(array[i],': [', "<br>");
						/*array[i] = replaceAll(array[i],'"', "<br>");*/
						let elem = document.createElement('div');
						elem.innerHTML = array[i];
						document.body.appendChild(elem);
						txt = txt+array[i];
						
					}
					let txtfx = "<table>"+txt+"</table>"
					let tbl = document.createElement('div');
						tbl.innerHTML = txtfx;
						document.body.appendChild(tbl);
        }
    }
}
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}