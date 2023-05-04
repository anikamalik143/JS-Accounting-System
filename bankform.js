let addFormObj=null;
addBankForm1=()=>{
	return(
		`
<div id="AddForm">
		<h1 class="mt-3 px-5">Add New Bank</h1>
     <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Branch Name</label>
        <input type="text" id="branchName" class="form-control" aria-describedby="emailHelp">
     
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Code</label>
       <input type="text" class="form-control" id="code">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Contact</label>
       <input type="text" class="form-control" id="contact">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Location</label>
       <input type="text" class="form-control" id="location">
      </div>
 
      <button onClick="addBankForm();" class="btn btn-primary">Add New Bank</button>
 </div>
`);
}
updateBankForm=(index)=>{
  return(
    `
<div id="UpdateForm">
  <h1 class="mt-3 px-5">Update A Bank</h1>
      <input type='hidden' id='recordID' value='${index}'/> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Branch Name</label>
    <input type="text" value='${banks[index][0]}' id="branchName" class="form-control" aria-describedby="emailHelp">
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Code</label>
    <input type="text"  class="form-control" value='${banks[index][1]}' id="code">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contact</label>
    <input type="text" class="form-control"  id="contact" value='${banks[index][2]}'>
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Location</label>
    <input type="text" class="form-control"  id="location" value='${banks[index][3]}'>
  </div>
 
  <button onClick="updateBank();" class="btn btn-primary">Update Bank</button>
</div>
`);
}
let addBank=()=>{
  banks.push([branchName.value,code.value,contact.value,location.value]);
  col_right.innerHTML=listBankData();
}
let listBankData=()=>{
  let str=
`<div class="container py-5">
<div class="row">
    <div class="col-sm-24">
      <div class="row ">
        <div class="col-sm-1 fw-bold">
          Branch Name
        </div>
        <div class="col-sm-2 ms-4 fw-bold">
           Code
        </div>
        <div class="col-sm-2  fw-bold">
           Contact
        </div>
        <div class="col-sm-2 fw-bold">
           Location
        </div>
        <div class="col-sm-2  fw-bold">
          Edit
        </div>
        <div class="col-sm-2  fw-bold">
          Delete
        </div>
      </div>
    </div>
  `;
for(i=0;i<banks.length;i++)
{
  str=str+`<div class="row py-2">
          <div class="col-sm-2 ms-2">
            <div class="font-weight-bold">
            ${banks[i][0]}
            </div>
          </div>
          <div class="col-sm-2">
            ${banks[i][1]}
          </div>
          <div class="col-sm-1">
            ${banks[i][2]}
          </div>
          <div class="col-sm-2">
            ${banks[i][3]}
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editBank(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteBank(${i})">Delete</button>
        
          </div>
          
        </div>`;
}
str=str+"</div></div>"
return(str);
}
let editBank=(index)=>{
    addFormObj=AddForm;
    col_left.innerHTML=updateBankForm(index);
    recordID.value=index;
}
let updateBank=()=>{
     let name=branchName.value;
     let id=code.value;
     let phone=contact.value;
     let area=location.value;
     banks[recordID.value][0]=name;
     banks[recordID.value][1]=code;
     banks[recordID.value][2]=contact;
     banks[recordID.value][3]=location;
     col_left.innerHTML=bank();
     col_right.innerHTML=listBankData();
     UpdateForm.style.display='none';
}
let deleteBank=(index)=>{
    banks.splice(index,1);
    col_right.innerHTML=listBankData();
}