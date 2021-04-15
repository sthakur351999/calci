function calculate(){
	a=parseFloat(document.getElementById('length').value);
	b=parseFloat(document.getElementById('breadth').value);
	c=parseFloat(document.getElementById('height').value);
	area=2*((a*b)+(b*c)+(c*a));
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
		
	document.getElementById('length').value=null;
	document.getElementById('breadth').value=null;
	document.getElementById('height').value=null;
	}