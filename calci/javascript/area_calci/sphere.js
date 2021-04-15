function calculate(){
	r=parseFloat(document.getElementById('radius').value);
	area=4*((22/7)*r*r);
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
	document.getElementById('radius').value=null;
}