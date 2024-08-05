

const DispData = ()=>{
    let getData = JSON.parse(localStorage.getItem('productInfo'));
    let allData = JSON.parse(localStorage.getItem('catInfo'));
    let tr = "";
    if(getData !== null){
        getData.map((i)=>{
            allData.map((j)=>{
                if(j.id == i.cat){
                    i.cat = j.name;
                }
            })
        tr += `
        <tr>
            <td>${i.id}</td>
            <td><img src="${i.image}" height="50px" width="50px"></td>
            <td>${i.name}</td>
            <td>${i.cat}</td>
            <td>${i.price}</td>
            <td>
            <button onclick = "editProd(${i.id})">Edit</button>
            <button onclick = "dltProd(${i.id})">Delete</button></td>
        </tr>
        `
    })}
    document.getElementById("allpr").innerHTML = tr;
    }

const dispCat = ()=>{
    let allData = JSON.parse(localStorage.getItem('catInfo'));

    let tr = `<option>---- Catagory ----</option>`

    if(allData != null){
        allData.map((i)=>{
            tr += `<option value="${i.id}">${i.name}</option>`
        })
    }
    document.getElementById('catname').innerHTML =tr;
}
dispCat();
DispData();

const getImageUrl = (e) =>{
let img = e.files[0];
console.log(img);
var fReader = new FileReader();
fReader.readAsDataURL(img);
fReader.addEventListener("load",(e)=>{
    var image = e.target.result;
    localStorage.setItem('productimage',image)
    $("#imgthumbnail").attr('src', image);
})

}



let data = [];

function saveFormData(){
    
    let prod_Data = JSON.parse(localStorage.getItem('productInfo'));
    let len = prod_Data ? prod_Data.length+1 : 1;
   
    
    let pCat = document.getElementById("catname").value;
    let pName = document.getElementById("prname").value;
    let pPrice = document.getElementById("price").value;
    let pDesc = document.getElementById("desc").value;
    let pImage = localStorage.getItem('productimage')|| '';
    let pid = document.getElementById('id').value

    const info = {
         "id":(pid !== '') ? pid : len,
            "cat":pCat,
            "name":pName,
            "price":pPrice,
            "image":pImage,
            "desc":pDesc
           
    }
    if(pid != ""){
    prod_Data = prod_Data.map((i)=>{
        if(i.id == pid){
            i.cat = pCat,
            i.name = pName,
            i.price = pPrice,
           i.desc = pDesc,
          console.log(i.image)
           i.image = (pImage != '') ? pImage : i.image; 
        }
        return i;
    })
data = prod_Data
}
    else{
        
        data.push(info)
    }
    
    localStorage.setItem('productInfo', JSON.stringify(data)) ;
    localStorage.removeItem('productimage')
   
//     document.getElementById("catname").value = "";
//     document.getElementById("prname").value = "";
//     document.getElementById("price").value = "";
//     document.getElementById("desc").value = ""
//    document.getElementById("imgthumbnail").src =""
//    document.getElementById("image").value =""
document.prfrm.reset()
$("#imgthumbnail").attr('src', '');
   DispData();
}





const dltProd = (id)=>{
   let getData = JSON.parse( localStorage.getItem('productInfo'));

   getData = getData.filter(i => i.id !== id)
   let j=1;
   getData = getData.map((i=>{
    i.id = j++;
    return i;
}))
localStorage.setItem('productInfo', JSON.stringify(getData)) ;
data = getData;
DispData();
}

const editProd = (id)=>{
    let getData = JSON.parse( localStorage.getItem('productInfo'));

    let selectProd = getData.find( i => i.id == id);
    
        document.getElementById("catname").value = selectProd.cat;
        document.getElementById("prname").value = selectProd.name;
        document.getElementById("price").value = selectProd.price;
        document.getElementById("desc").value = selectProd.desc;
        console.log(selectProd.image)
        document.getElementById("imgthumbnail").src = selectProd.image;
        document.getElementById("id").value = id
    
    
    
}   




