function addthreenumbers() {
        let inputnum1 = document.getElementById('inputbox1').value; 
		let inputnum2 = document.getElementById('inputbox2').value; 
		let inputnum3 = document.getElementById('inputbox3').value; 
        let answer = (inputnum1*1)+(inputnum2*1)+(inputnum3*1);
          document.getElementById('resultbox').value = answer;
    }