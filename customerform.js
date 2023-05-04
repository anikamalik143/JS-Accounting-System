let addFormObj3=null;
let addCustomerForm1=()=>{
	return(`
  <div id="AddForm">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Sr.#</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
    <label for="exampleInputEmail1" class="form-label">Purchase Item Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contact</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  `);
}
updateCustomerForm=(index)=>{
  return(
    `
<div id="UpdateForm">
  <h1 class="mt-3 px-5">Update A Customer</h1>
      <input type='hidden' id='recordID' value='${index}'/> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Sr No</label>
    <input type="text" value='${customer[index][0]}' id="srNo" class="form-control" aria-describedby="emailHelp">
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text"  class="form-control" value='${customer[index][1]}' id="name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Purchase Item Name</label>
    <input type="text" class="form-control"  id="purchaseItemName" value='${customer[index][2]}'>
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contact</label>
    <input type="text" class="form-control"  id="contact" value='${customer[index][3]}'>
  </div>
 
  <button onClick="updateCustomer();" class="btn btn-primary">Update Customer</button>
</div>
`);
}
let addCutomer=()=>{
  customer.push([srNo.value,name.value,purchaseItemName.value,contact.value]);
  col_right.innerHTML=listCustomerData();
}
let listCustomerData=()=>{
	let str= `<div class="container py-5">
<div class="row">
    <div class="col-sm-24">
      <div class="row ">
        <div class="col-sm-1 fw-bold">
          Sr#
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
           Name
        </div>
        <div class="col-sm-2 ms-2 fw-bold">
           PIN
        </div>
         <div class="col-sm-2 ms-3 fw-bold">
           Contact
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
  for(i=0;i<customer.length;i++)
  {
  	str=str+`<div class="row ">
        <div class="col-sm-2 ">
          ${customer[i][0]}
        </div>
        <div class="col-sm-2 ms-1 ">
            ${customer[i][1]}
        </div>
        <div class="col-sm-2  ">
            ${customer[i][2]}
        </div>
        <div class="col-sm-2  ">
            ${customer[i][3]}
        </div>
       <div class="col-sm-2 ">
            <button class="btn btn-primary" onClick="editCustomer(${i})">Edit</button>
          </div>
          <div class="col-sm-1 ms-1">
            <button class="btn btn-primary" onClick="deleteCustomer(${i})">Delete</button>
        
          </div>
      </div>`;
  }
  str=str+"</div></div>"
  return(str);
}
let editCustomer=(index)=>{
    addFormObj3=AddForm;
    col_left.innerHTML=updateCustomerForm(index);
    recordID.value=index;
}
let updateCustomer=()=>{
     let id=srNo.value;
     let title=name.value;
     let name=purchaseItemName.value;
     let phone=contact.value;
     customers[recordID.value][0]=srNo;
     customers[recordID.value][1]=name;
     customers[recordID.value][2]=purchaseItemName;
     customers[recordID.value][3]=contact;
     col_left.innerHTML=customer();
     col_right.innerHTML=listCustomerData();
     UpdateForm.style.display='none';
}
let deleteCustomer=(index)=>{
    customer.splice(index,1);
    col_right.innerHTML=listCustomerData();
}