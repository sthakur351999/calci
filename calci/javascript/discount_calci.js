function answer(){

	product_price=parseFloat(document.getElementById('price').value);
	discount_per=parseFloat(document.getElementById('discount').value);

	discount=(discount_per/100)*product_price;
	price=product_price-discount;

	document.getElementById('dis').innerHTML="Discount: Rs."+discount;
	document.getElementById('final_price').innerHTML="Price: Rs."+price;
	
	document.getElementById('price').value=null;
	document.getElementById('discount').value=null;
}