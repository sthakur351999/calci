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

function plus(){
	sign=document.getElementById('sign').innerHTML;

	if(sign=='-'){
		minus();
		document.getElementById('sign').innerHTML='+';
		series('+');
	}
	else if(sign=='*'){
		mul();
		document.getElementById('sign').innerHTML='+';
		series('+');
	}
	else if(sign=='/'){
		div();
		document.getElementById('sign').innerHTML='+';
		series('+');
	}
	else{
	document.getElementById('sign').innerHTML='+';
	series('+');
	a=document.getElementById('fnumber').innerHTML;
	b=document.getElementById('snumber').innerHTML;
	c=parseInt(b)+parseInt(a);
	document.getElementById('result').innerHTML=c;
	document.getElementById('fnumber').innerHTML=c;
	document.getElementById('snumber').innerHTML=0;
	}
}

function minus(){
	sign=document.getElementById('sign').innerHTML;

	if(sign=='+'){
		plus();
		document.getElementById('sign').innerHTML='-';
		series('-');
	}
	else if(sign=='*'){
		mul();
		document.getElementById('sign').innerHTML='-';
		series('-');
	}
	else if(sign=='/'){
		div();
		document.getElementById('sign').innerHTML='-';
		series('-');
	}
	else{
	document.getElementById('sign').innerHTML='-';
	series('-');
	a=document.getElementById('fnumber').innerHTML;
	b=document.getElementById('snumber').innerHTML;
	if(a==0){
	c=parseInt(b)-parseInt(a);
	}
	else{
	c=parseInt(a)-parseInt(b);
	}
	document.getElementById('result').innerHTML=c;
	document.getElementById('fnumber').innerHTML=c;
	document.getElementById('snumber').innerHTML=0;
	}
}

function mul(){
	sign=document.getElementById('sign').innerHTML;

	if(sign=='+'){
		plus();
		document.getElementById('sign').innerHTML='*';
		series('*');
	}
	else if(sign=='-'){
		minus();
		document.getElementById('sign').innerHTML='*';
		series('*');
	}
	else if(sign=='/'){
		div();
		document.getElementById('sign').innerHTML='*';
		series('*');
	}
	else{
	document.getElementById('sign').innerHTML='*';
	series('*');
	a=document.getElementById('fnumber').innerHTML;
	b=document.getElementById('snumber').innerHTML;
	if(a==0){
		a=1;
	}
	c=parseInt(b)*parseInt(a);
	document.getElementById('result').innerHTML=c;
	document.getElementById('fnumber').innerHTML=c;
	document.getElementById('snumber').innerHTML=0;
	}
}

function div(){
	sign=document.getElementById('sign').innerHTML;

	if(sign=='+'){
		plus();
		document.getElementById('sign').innerHTML='/';
		series('/');
	}
	else if(sign=='-'){
		minus();
		document.getElementById('sign').innerHTML='/';
		series('/');
	}
	else if(sign=='*'){
		mul();
		document.getElementById('sign').innerHTML='/';
		series('/');
	}
	else{
	document.getElementById('sign').innerHTML='/';
	series('/');
	a=document.getElementById('fnumber').innerHTML;
	b=document.getElementById('snumber').innerHTML;
	if(a==0){
	a=1;
	c=parseInt(b)/parseInt(a);
	}
	else{
	c=parseInt(a)/parseInt(b);
	}
	document.getElementById('result').innerHTML=c;
	document.getElementById('fnumber').innerHTML=c;
	document.getElementById('snumber').innerHTML=0;
	}
}

function answer(){
	sign=document.getElementById('sign').innerHTML;
	if(sign=='+'){
		plus();
	}
	if(sign=='-'){
		minus();
	}
	if(sign=='*'){
		mul();
	}
	if(sign=='/'){
		div();
	}

	document.getElementById('fnumber').innerHTML=0;
	document.getElementById('snumber').innerHTML=0;
	document.getElementById('sign').innerHTML=null;
	document.getElementById('series').innerHTML=0;
}

function clr(){
	document.getElementById('fnumber').innerHTML=0;
	document.getElementById('snumber').innerHTML=0;
	document.getElementById('result').innerHTML='Answer';
	document.getElementById('sign').innerHTML=null;
	document.getElementById('series').innerHTML=0;
}

function num(ele){
	document.getElementById('snumber').innerHTML+=ele.innerHTML;
	document.getElementById('series').innerHTML+=ele.innerHTML;
	s=document.getElementById('series').innerHTML;
	if(s.length>20){
		s=s.slice(-20);
		document.getElementById('series').innerHTML=s;
	}
}

function series(sym){
	s=document.getElementById('series').innerHTML;
	if(s[s.length-1]=="+" || s[s.length-1]=="-" || s[s.length-1]=="*" || s[s.length-1]=="/"){
		
		s=s.slice(0,s.length-1);
	}
	s=s+sym;
	document.getElementById('series').innerHTML=s;
	if(s.length>20){
		s=s.slice(-20);
		document.getElementById('series').innerHTML=s;
	}
}