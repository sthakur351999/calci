function calculate(){
	s=parseFloat(document.getElementById('square_side').value);
	area=s*s;
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
	document.getElementById('square_side').value=null;
}