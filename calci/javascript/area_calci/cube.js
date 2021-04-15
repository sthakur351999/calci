function calculate(){
	s=parseFloat(document.getElementById('cube_side').value);
	area=6*(s*s);
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
	document.getElementById('cube_side').value=null;
}