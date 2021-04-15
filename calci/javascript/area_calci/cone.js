function calculate(){
	r=parseFloat(document.getElementById('radius').value);
	h=parseFloat(document.getElementById('height').value);

	s=Math.sqrt((r*r)+(h*h));

	area=((22/7)*r*r) + ((22/7)*r*s);
	
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
	document.getElementById('radius').value=null;
	document.getElementById('height').value=null;
}