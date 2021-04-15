function calculate(){
	r=parseFloat(document.getElementById('radius').value);
	h=parseFloat(document.getElementById('height').value);
	area= (2*(22/7)*r*r)+(2*(22/7)*r*h);
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
	document.getElementById('radius').value=null;
	document.getElementById('height').value=null;
}