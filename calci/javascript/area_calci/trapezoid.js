function calculate(){
	a=parseFloat(document.getElementById('parallel_side_1').value);
	b=parseFloat(document.getElementById('parallel_side_2').value);
	h=parseFloat(document.getElementById('height').value);
	area=0.5*(a+b)*h;
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
		
	document.getElementById('parallel_side_1').value=null;
	document.getElementById('parallel_side_2').value=null;
	document.getElementById('height').value=null;
	}