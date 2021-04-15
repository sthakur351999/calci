function answer(){
	sp=parseFloat(document.getElementById('sp').value);
	cp=parseFloat(document.getElementById('cp').value);
	var result=0;
	if(sp>cp){
		profit=sp-cp;
		profit_per=(profit/cp)*100;
		document.getElementById('result').innerHTML="Profit: Rs. "+profit;
		document.getElementById('result_per').innerHTML="Profit Percent: "+profit_per+"%";
	}
	else if(cp>sp){
		loss=cp-sp;
		loss_per=(loss/cp)*100;
		document.getElementById('result').innerHTML="Loss: Rs. "+loss;
		document.getElementById('result_per').innerHTML="Loss Percent: "+loss_per+"%";
	}
	else if(cp==sp){
		document.getElementById('result').innerHTML="No Profit No Loss";
		document.getElementById('result_per').innerHTML="Profit/Loss Percent: 0%"
	}
	else{
		document.getElementById('result').innerHTML="Incorrect Input";
		document.getElementById('result_per').innerHTML="Try Again";
	}
	document.getElementById('cp').value=null;
	document.getElementById('sp').value=null;
}