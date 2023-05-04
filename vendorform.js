let addFormObj5=null;
let addVendorForm1=()=>{
	return(`
<div id="AddForm">
		<h1 class="mt-3 px-5">Add New Vendor</h1>
     <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Company Name</label>
        <input type="text" id="companyName" class="form-control" aria-describedby="emailHelp">
     
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Contact</label>
       <input type="text" class="form-control" id="emailAddress">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Office Address</label>
       <input type="text" class="form-control" id="officeAddress">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Offer Services</label>
       <input type="text" class="form-control" id="offerServices">
      </div>
 
      <button onClick="addVendorForm();" class="btn btn-primary">Add New Vendor</button>
 </div>
`);
}
updateVendorForm=(index)=>{
  return(
    `
<div id="UpdateForm">
  <h1 class="mt-3 px-5">Update A Vendor</h1>
      <input type='hidden' id='recordID' value='${index}'/> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Company Name</label>
    <input type="text" value='${vendors[index][0]}' id="companyName" class="form-control" aria-describedby="emailHelp">
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contact</label>
    <input type="text"  class="form-control" value='${vendors[index][1]}' id="contact">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Office Address</label>
    <input type="text" class="form-control"  id="officeAddress" value='${vendors[index][2]}'>
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Offer Services</label>
    <input type="text" class="form-control"  id="offerServices" value='${vendors[index][2]}'>
  </div>
 
  <button onClick="updateVendor();" class="btn btn-primary">Update Vendor</button>
</div>
`);
}
let addVendor=()=>{
  vendor.push([companyName.value,emailAddress.value,officeAddress.value,offerServices.value]);
  col_right.innerHTML=listVendorData();
}
let listVendorData=()=>{
  let str=`<div class="container py-5">
<div class="row">
    <div class="col-sm-24">
      <div class="row ">
        <div class="col-sm-1 fw-bold">
          Com-Name
        </div>
        <div class="col-sm-2 ms-2 fw-bold">
           Contact
        </div>
        <div class="col-sm-2 ms-3 fw-bold">
           Office Address 
        </div>
        <div class="col-sm-2 ms-2 fw-bold">
           Offer Services 
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
          Edit
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
          Delete
        </div>
      </div>
</div>
  `;

for(i=0;i<vendors.length;i++)
{
  str=str+`<div class="row ">
        <div class="col-sm-2 ">
          ${vendors[i][0]}
        </div>
        <div class="col-sm-2 ">
            ${vendors[i][1]}
        </div>
        <div class="col-sm-2 ms-3 ">
            ${vendors[i][2]}
        </div>
        <div class="col-sm-2 ms-3 ">
            ${vendors[i][3]}
        </div>
       <div class="col-sm-2 ">
            <button class="btn btn-primary" onClick="editVendors(${i})">Edit</button>
          </div>
          <div class="col-sm-1">
            <button class="btn btn-primary" onClick="deleteVendor(${i})">Delete</button>
        
          </div>
      </div>`;
  }
 str=str+"</div></div>"
 return(str);
}
let editVendors=(index)=>{
    addFormObj5=AddForm;
    col_left.innerHTML=updateVendorForm(index);
    recordID.value=index;
}
let updateVendor=()=>{
     let id=companyName.value;
     let title=contact.value;
     let conatact=officeAddress.value;
     let type=offerServices.value;
     vendors[recordID.value][0]=companyName;
     vendors[recordID.value][1]=conatact;
     vendors[recordID.value][2]=officeAddress;
     vendors[recordID.value][3]=offerServices;
     col_left.innerHTML=vendor();
     col_right.innerHTML=listVendorData();
     UpdateForm.style.display='none';
}
let deleteVendor=(index)=>{
    vendors.splice(index,1);
    col_right.innerHTML=listVendorData();
}