function calculate(){
	l=parseFloat(document.getElementById('length').value);
	b=parseFloat(document.getElementById('breadth').value);
	area=l*b;
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
	document.getElementById('length').value=null;
	document.getElementById('breadth').value=null;
}