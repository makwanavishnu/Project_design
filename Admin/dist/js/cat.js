
const fetchData = () =>{
    let getData = JSON.parse(localStorage.getItem('catInfo'))|| [];

    let tb = ""
 
     getData.map((i)=>{
      tb += `
         <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td><button type="button" onclick="editData(${i.id})" >Edit</button>
                <button type="button" onclick="dltData(${i.id})">Delete</button>
                </td>
              </tr>
        `
     })
    document.getElementById("allCat").innerHTML = tb;

}
 
let editid='';

// fetchData();
let data = [];

const saveData = () => {
    let getData = JSON.parse(localStorage.getItem('catInfo')) || []; // Initialize as empty array if null
    let cname = document.catfrm.catname.value.trim();
    let len = getData.length + 1;

    let info = {
        "id": (editid !== '') ? editid : len,
        "name": cname
    };

    if (editid !== '') {
        // Update existing data
        getData = getData.map((item) => {
            if (item.id == editid) {
                item.name = cname;
            }
            return item;
        });
    } else {
        // Insert new data
        getData.push(info);
    }

    localStorage.setItem('catInfo', JSON.stringify(getData));
    document.catfrm.catname.value = '';
    editid = ''; // Reset editid after saving
    fetchData(); // Refresh the table
}

fetchData();

function dltData(id){
    

let getData = JSON.parse(localStorage.getItem('catInfo')) || []; // Initialize as empty array if null

getData.splice(id-1,1);
let j=1;
 getData = getData.map((i=>{
    i.id = j++;
    return i;
}))
localStorage.setItem('catInfo', JSON.stringify(getData));
data = getData;
fetchData();
}


function editData(id) {
    editid = id;
    let getData = JSON.parse(localStorage.getItem('catInfo'))|| [];
    let selectedItem = getData.find(item => item.id === id);
    if (selectedItem) {
        document.catfrm.catname.value = selectedItem.name;
    }
}


