let addItemForm=()=>{
let str=`<div class="container py-5">
<div class="row">
    <div class="col-sm-24">
      <div class="row ">
        <div class="col-sm-2 fw-bold">
          Item Name
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
           Quantity
        </div>
        <div class="col-sm-2 ms-3 fw-bold">
           Price
        </div>
        <div class="col-sm-2 ms-4 fw-bold">
          Edit
        </div>
        <div class="col-sm-2 ms-3 fw-bold">
          Delete
        </div>
      </div>
</div>`;
if(id!=""){
	let searchID4=parseInt(id);
	for(i=0;i<item.length;i++)
	{
    if(item[i][0]==searchID4)
      str=str+`<div class="row ">
        <div class="col-sm-2 fw-bold">
          ${items[i][0]}
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
            ${items[i][1]}
        </div>
        <div class="col-sm-2 ms-3 fw-bold">
            ${items[i][2]}
        </div>
        <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editItems(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteItems(${i})">Delete</button>
        
          </div>
      </div>`;
  
	}
}
else{
  for(i=0;i<item.length;i++)
  {
    str=str+`<div class="row ">
        <div class="col-sm-2">
          ${items[i][0]}
        </div>
        <div class="col-sm-2 ms-1 ">
            ${items[i][1]}
        </div>
        <div class="col-sm-2 ms-3">
            ${items[i][2]}
        </div>
        <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editItems(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteItems(${i})">Delete</button>
        
          </div>
      </div>`;
  }
str=str+"</div></div>"
}
return(str);
}
let item=(id)=>{
  if (id==4){
    return addItemForm1();
    return listItemData();
  }
}