let tr = `
   <li class="active" data-filter="*">All</li>
`
console.log(tr)
let allCatData = JSON.parse(localStorage.getItem('catInfo'))
let j= [".strawberry",".berry",".lemon"];
let l=0;
allCatData.map((i,index)=>{
    tr += `
    <li data-filter="${j[l++]}">${i.name}</li>
    `
    
})

let catElement = document.getElementById('allCat');
if(catElement){
    catElement.innerHTML=tr;
}


let allPr = JSON.parse(localStorage.getItem('productInfo'))

let pr = '';
let allCatwisePr = '';



        // allPr.map((j)=>{

        //     allCatwisePr += `<div class="col-lg-4 col-md-6 text-center">
		// 			<div class="single-product-item">
		// 				<div class="product-image">
		// 					<a href="single-product.html"><img src=${j.image} alt=""></a>
		// 				</div>
		// 				<h3>${j.name}</h3>
		// 				<p class="product-price"><span>Per Kg</span>$ ${j.price} </p>
		// 				<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
		// 			</div>
		// 		</div>`


        // })



        let k=["strawberry","berry","lemon"];
        let t=0;
allCatData.map((i)=>{
    
            allPr.map((j)=>{
                    if(j.cat == i.id){
                        allCatwisePr += `<div class="col-lg-4 col-md-6 text-center ${k[t++]}">
					<div class="single-product-item">
						<div class="product-image">
							<a href="single-product.html"><img src=${j.image} alt=""></a>
						</div>
						<h3>${j.name}</h3>
						<p class="product-price"><span>Per Kg</span>$ ${j.price} </p>
						<a  href="cart.html" class="cart-btn" onclick="addToCart(${j.id})" ><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>`

                    }
            })
                    
                                        
                                        
    
})

let prElement = document.getElementById("allPr")
if(prElement){
    prElement.innerHTML=allCatwisePr;

}

let cartData = [];

const addToCart = (id) => {
    let cartData = JSON.parse(localStorage.getItem('cartInfo')) || [];

    let existingItem = cartData.find(item => item.pid === id);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        let len = cartData.length + 1;
        let newItem = {
            cartid: len,
            pid: id,
            qty: 1
        };
        cartData.push(newItem);
    }
    localStorage.setItem('cartInfo', JSON.stringify(cartData));

    cartCounter();
}

function  cartCounter() {
    let cartData = JSON.parse(localStorage.getItem('cartInfo')) || [];
    let cartCounterElement = document.getElementById("cartCounter");
    if (cartCounterElement) {
        cartCounterElement.innerHTML = cartData.length.toString();
    }
}

cartCounter();



let cardElement=``;
let value= 0;
let total=0;
let shipping=45;
let cartdata = JSON.parse(localStorage.getItem('cartInfo')) || [];
let allProduct = JSON.parse(localStorage.getItem('productInfo')) || [];
allProduct.map((itm)=>{
cartdata.map((item) =>{
    console.log(item.pid);
 if(item.pid == itm.id ){
 cardElement +=`
    <tr class="table-body-row">
    <td class="product-remove"><a href="#"><i class="far fa-window-close"></i></a></td>
    <td class="product-image"><img src="${itm.image}" alt=""></td>
    <td class="product-name">${itm.name}</td>
    <td class="product-price">$ ${itm.price}</td>
    <td class="product-quantity"><input type="number" placeholder="0" value=${item.qty}></td>
    <td class="product-total">$ ${(itm.price)*(item.qty)}</td>

    </tr>
`
value += ((itm.price)*(item.qty))
let subTotleEl = document.getElementById("sub");
if(subTotleEl){
 subTotleEl.innerText = "$" + value;
 document.getElementById("stotal").innerText= "$"+shipping;
 
 document.getElementById("total").innerText ="$"+(value+shipping)
}

 }
})
})

let cartCount =document.getElementById("cartCounter");
if(cartCount){
    cartCount.innerHTML=cardElement;
}

