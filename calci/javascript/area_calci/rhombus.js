function calculate(){
	d1=parseFloat(document.getElementById('diagonal_1').value);
	d2=parseFloat(document.getElementById('diagonal_2').value);
	area=0.5*d1*d2;
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
	document.getElementById('diagonal_1').value=null;
	document.getElementById('diagonal_2').value=null;
}