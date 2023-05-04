let addFormObj4=null;
let addItemForm1=()=>{
	return(`
  <div id="AddForm">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Quantity</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
    <label for="exampleInputEmail1" class="form-label">Price</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <button onClick="submit();" class="btn btn-primary">Add Item</button>
  </div>
  `);
}
updateItemForm=(index)=>{
  return(
    `
<div id="UpdateForm">
  <h1 class="mt-3 px-5">Update An Item</h1>
      <input type='hidden' id='recordID' value='${index}'/> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Item Name</label>
    <input type="text" value='${items[index][0]}' id="itemName" class="form-control" aria-describedby="emailHelp">
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Quantity</label>
    <input type="text"  class="form-control" value='${items[index][1]}' id="quantity">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="text" class="form-control"  id="price" value='${items[index][2]}'>
  </div>
 
  <button onClick="updateItem();" class="btn btn-primary">Update Item</button>
</div>
`);
}
let addItem=()=>{
  item.push([itemName.value,quantity.value,price.value]);
  col_right.innerHTML=listItemData();
}
let listItemData=()=>{
	let str= `<div class="container py-5 px-10">
<div class="row">
    <div class="col-sm-24">
      <div class="row ">
        <div class="col-sm-1 fw-bold">
          Item Name
        </div>
        <div class="col-sm-2 ms-4 fw-bold">
           Quantity
        </div>
        <div class="col-sm-2 ms-2 fw-bold">
           Price
        </div>
        <div class="col-sm-1 ms-2 fw-bold">
          Edit
        </div>
        <div class="col-sm-1 ms-4  fw-bold">
          Delete
        </div>
      </div>
</div>
  `;
  for(i=0;i<items.length;i++)
  {
  	str=str+`<div class="row ">
        <div class="col-sm-2 ">
          ${items[i][0]}
        </div>
        <div class="col-sm-2 ms-2 ">
            ${items[i][1]}
        </div>
        <div class="col-sm-2 ms-1 ">
            ${items[i][2]}
        </div>
       <div class="col-sm-2 ">
            <button class="btn btn-primary" onClick="editItem(${i})">Edit</button>
          </div>
          <div class="col-sm-1 ms-1">
            <button class="btn btn-primary" onClick="deleteItem(${i})">Delete</button>
        
          </div>
      </div>`;
  }
  str=str+"</div></div>"
  return(str);
}
let editItem=(index)=>{
    addFormObj4=AddForm;
    col_left.innerHTML=updateItemForm(index);
    recordID.value=index;
}
let updateItem=()=>{
     let id=itemName.value;
     let title=quantity.value;
     let type=price.value;
     items[recordID.value][0]=itemName;
     items[recordID.value][1]=quantity;
     items[recordID.value][2]=price;
     col_left.innerHTML=item();
     col_right.innerHTML=listItemData();
     UpdateForm.style.display='none';
}
let deleteItem=(index)=>{
    items.splice(index,1);
    col_right.innerHTML=listItemData();
}