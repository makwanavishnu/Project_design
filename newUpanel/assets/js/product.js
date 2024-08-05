let allPro = JSON.parse(localStorage.getItem('productInfo'));
let upr=``
allPro.map((i)=>{
upr +=`
	<div class="col-lg-4 col-md-6 text-center">
					<div class="single-product-item">
						<div class="product-image">
							<a href="single-product.html"><img src=${i.image} alt=""></a>
						</div>
						<h3>${i.name}</h3>
						<p class="product-price"><span>Per Kg</span>$ ${i.price} </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>`


})
let ourPr = document.getElementById("our");
if(ourPr){
    ourPr.innerHTML=upr;
}
let value1= 0;
let total1=0;
let shipping1=45;
let alllist = JSON.parse(localStorage.getItem('productInfo'));
let cartdatalist = JSON.parse(localStorage.getItem('cartInfo')) || [];
let tl=` <tr>
			<td>Product</td>
			<td>Total</td>
		</tr>`
alllist.map((j)=>{

	
	cartdatalist.map((ij) =>{
	if(ij.pid == j.id){
		tl +=`
		<tr>
			<td>${j.name}</td>
			<td>$ ${(j.price)*(ij.qty)}</td>
		</tr>`
	
	
		value1 += ((j.price)*(ij.qty))
		let subTotleEl = document.getElementById("sub1");
		 if(subTotleEl){
		subTotleEl.innerText = "$" + value1;
		 }
		
	let subtotal1 =	 document.getElementById("stotal1")
		if(subtotal1){
			subtotal1.innerText= "$"+shipping1;
			document.getElementById("total1").innerText ="$"+(value1+shipping1)
		} 
		
	}
	})
})
let ourlist = document.getElementById("list")
if(ourlist){
	ourlist.innerHTML = tl;
}	

