function one(element){
	num(element);
}
function two(element){
	num(element);
}
function three(element){
	num(element);
}
function four(element){
	num(element);
}
function five(element){
	num(element);
}
function six(element){
	num(element);
}
function seven(element){
	num(element);
}
function eight(element){
	num(element);
}
function nine(element){
	num(element);
}
function zero(element){
	num(element);
}

function answer(){
	fact=1;
	n=parseInt(document.getElementById("series").innerHTML);
	for(i=1; i<=n; i++)  
	{
	fact= fact*i;
	}  
	document.getElementById("result").innerHTML= fact;
	}

function clr(){
	document.getElementById('result').innerHTML='Answer';
	document.getElementById('series').innerHTML=0;
}

function num(ele){
	n=document.getElementById('series').innerHTML;
	if(n==0){
	document.getElementById('series').innerHTML=ele.innerHTML;
	}
	else{
	document.getElementById('series').innerHTML+=ele.innerHTML;
	}
	answer();
}