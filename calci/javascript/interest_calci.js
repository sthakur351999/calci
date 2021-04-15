function answer(){
	p=parseFloat(document.getElementById('p').value);
	r=parseFloat(document.getElementById('r').value);
	t=parseFloat(document.getElementById('t').value);
	
	if(document.getElementById('si').checked){
		i=(p*r*t)/100;
		a=p+i;			
	}
	
	else if(document.getElementById('ci').checked){
		if(document.getElementById('half_yearly').checked){
			t=t*2;
			r=r/2;
		}
		if(document.getElementById('quaterly').checked){
			t=t*4;
			r=r/4;
		}
		a1=(1+(r/100));
		a2=Math.pow(a1,t);
		a=p*a2;
		i=a-p;
	}
		document.getElementById('interest').innerHTML="Interest: Rs. "+i;
		document.getElementById('amount').innerHTML="Amount: Rs. "+a;
}

function show_time_type(){
	document.getElementById('yearly').className="show_radio_year";
	document.getElementById('half_yearly').className="show_radio_year";
	document.getElementById('quaterly').className="show_radio_year";
	document.getElementById('h4_yearly').className="show_h4";
	document.getElementById('h4_half_yearly').className="show_h4";
	document.getElementById('h4_quaterly').className="show_h4";
}

function hide_time_type(){
	document.getElementById('yearly').className="hide";
	document.getElementById('half_yearly').className="hide";
	document.getElementById('quaterly').className="hide";
	document.getElementById('h4_yearly').className="hide";
	document.getElementById('h4_half_yearly').className="hide";
	document.getElementById('h4_quaterly').className="hide";
}