let addFormObj1=null;
addCompanyForm=()=>{
	return(
		`
<div id="AddForm">
		<h1 class="mt-3 px-5">Add New Company</h1>
     <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Company Reg No</label>
        <input type="text" id="cmpanyRegNo" class="form-control" aria-describedby="emailHelp">
     
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Company Name</label>
       <input type="text" class="form-control" id="companyName">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Company Contact</label>
       <input type="text" class="form-control" id="companyContact">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Company Type</label>
       <input type="text" class="form-control" id="companyType">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Company Location</label>
       <input type="text" class="form-control" id="companyLocation">
      </div>
 
      <button onClick="addCompanyForm();" class="btn btn-primary">Add New Company</button>
 </div>
`);
}
updateCompanyForm=(index)=>{
  return(
    `
<div id="UpdateForm">
  <h1 class="mt-3 px-5">Update A Company</h1>
      <input type='hidden' id='recordID' value='${index}'/> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Company Reg No</label>
    <input type="text" value='${company[index][0]}' id="companyRegNo" class="form-control" aria-describedby="emailHelp">
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Company Name</label>
    <input type="text"  class="form-control" value='${company[index][1]}' id="companyName">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Company Contact</label>
    <input type="text" class="form-control"  id="companyContact" value='${company[index][2]}'>
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Company Type</label>
    <input type="text" class="form-control"  id="companyType" value='${company[index][3]}'>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Company Location</label>
    <input type="text" class="form-control"  id="companyLocation" value='${company[index][4]}'>
  </div>
 
  <button onClick="updateCompany();" class="btn btn-primary">Update Company</button>
</div>
`);
}
let addCompany=()=>{
  company.push([companyRegNo.value,companyName.value,companyContact.value,companyType.value,companyLocation.value]);
  col_right.innerHTML=listCompaniesData();
}
let listCompaniesData=()=>{
  let str=
`<div class="container py-5">
<div class="row">
    <div class="col-sm-24">
      <div class="row ">
        <div class="col-sm-2 fw-bold">
          Company Reg#
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
           Name
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
    </div>
  `;
for(i=0;i<company.length;i++)
{
  str=str+`<div class="row py-2">
          <div class="col-sm-2">
            <div class="font-weight-bold">
            ${company[i][0]}
            </div>
          </div>
          <div class="col-sm-4">
            ${company[i][1]}
          </div>
          <div class="col-sm-2">
            ${company[i][2]}
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editCompany(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteCompany(${i})">Delete</button>
        
          </div>
          
        </div>`;
}
str=str+"</div></div>"
return(str);
}
let editCompany=(index)=>{
    addFormObj1=AddForm;
    col_left.innerHTML=updateCompanyForm(index);
    recordID.value=index;
}
let updateCompany=()=>{
     let id=companyRegNo.value;
     let name=companyName.value;
     let contact=companyContact.value;
     let type=companyType.value;
     let location=companyLocation.value;
     company[recordID.value][0]=companyRegNo;
     company[recordID.value][1]=companyName;
     company[recordID.value][2]=companyContact;
     company[recordID.value][3]=companyType;
     company[recordID.value][4]=companyLocation;
     col_left.innerHTML=companies();
     col_right.innerHTML=listCompaniesData();
     UpdateForm.style.display='none';
}
let deleteCompany=(index)=>{
    company.splice(index,1);
    col_right.innerHTML=listCompaniesData();
}