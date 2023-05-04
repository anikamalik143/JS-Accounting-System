let addCustomerForm=()=>{
let str=`<div class="container py-5">
<div class="row">
    <div class="col-sm-24">
      <div class="row ">
        <div class="col-sm-2 fw-bold">
          Sr#
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
           Name
        </div>
        <div class="col-sm-2 ms-3 fw-bold">
           Purchase Item Name
        </div>
         <div class="col-sm-2 ms-3 fw-bold">
           Contact
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
	let searchID3=parseInt(id);
	for(i=0;i<customers.length;i++)
	{
    if(customers[i][0]==searchID3)
      str=str+`<div class="row ">
        <div class="col-sm-2 fw-bold">
          ${customer[i][0]}
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
            ${customer[i][1]}
        </div>
        <div class="col-sm-2 ms-3 fw-bold">
            ${customer[i][2]}
        </div>
        <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editCustomers(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteCustomers(${i})">Delete</button>
        
          </div>
      </div>`;
  
	}
}
else{
  for(i=0;i<customers.length;i++)
  {
    str=str+`<div class="row ">
        <div class="col-sm-2">
          ${customer[i][0]}
        </div>
        <div class="col-sm-2 ms-1 ">
            ${customer[i][1]}
        </div>
        <div class="col-sm-2 ms-3">
            ${customer[i][2]}
        </div>
        <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editCustomers(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteCustomers(${i})">Delete</button>
        
          </div>
      </div>`;
  }
str=str+"</div></div>"
}
return(str);
}
let customers=(id)=>{
  if (id==3){
    return addCustomerForm1();
    return listCustomerData();
  }
}