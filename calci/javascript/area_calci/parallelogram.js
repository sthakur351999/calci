function calculate(){
	b=parseFloat(document.getElementById('base').value);
	h=parseFloat(document.getElementById('height').value);
	area=b*h;
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
	document.getElementById('base').value=null;
	document.getElementById('height').value=null;
}