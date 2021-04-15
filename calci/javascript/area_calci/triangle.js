function area_by_side(){
	document.getElementById('by_base_height').className='hide';
	document.getElementById('by_sides').className='show';
	document.getElementById('button').className='button';
}
function area_by_base_height(){
	document.getElementById('by_sides').className='hide';
	document.getElementById('by_base_height').className='show';
	document.getElementById('button').className='button';
}
function calculate(){
	if(document.getElementById('area_by_side').checked){
		a=parseFloat(document.getElementById('side1').value);
		b=parseFloat(document.getElementById('side2').value);
		c=parseFloat(document.getElementById('side3').value);
		s=(a+b+c)/2;
		area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
		
		document.getElementById('side1').value=null;
		document.getElementById('side2').value=null;
		document.getElementById('side3').value=null;
	}
	if(document.getElementById('area_by_base_height').checked){
		b=parseFloat(document.getElementById('base').value);
		h=parseFloat(document.getElementById('height').value);
		area=0.5*b*h;

		document.getElementById('base').value=null;
		document.getElementById('height').value=null;
	}
	document.getElementById('area').innerHTML="Area: "+area+" sq units";
}