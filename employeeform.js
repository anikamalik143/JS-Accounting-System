let addFormObj6=null;
addEmployeeForm1=()=>{
	return(
		`
<div id="AddForm">
		<h1 class="mt-3 px-5">Add New Employee</h1>
     <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Designation</label>
        <input type="text" id="designation" class="form-control" aria-describedby="emailHelp">
     
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Name</label>
       <input type="text" class="form-control" id="name">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Contact</label>
       <input type="text" class="form-control" id="contact">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Pay</label>
       <input type="text" class="form-control" id="pay">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Location</label>
       <input type="text" class="form-control" id="location">
      </div>
 
      <button onClick="addCompanyForm();" class="btn btn-primary">Add New Employee</button>
 </div>
`);
}
updateEmployeeForm=(index)=>{
  return(
    `
<div id="UpdateForm">
  <h1 class="mt-3 px-5">Update An Employee</h1>
      <input type='hidden' id='recordID' value='${index}'/> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Designation</label>
    <input type="text" value='${employees[index][0]}' id="designation" class="form-control" aria-describedby="emailHelp">
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text"  class="form-control" value='${employees[index][1]}' id="name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contact</label>
    <input type="text" class="form-control"  id="contact" value='${employees[index][2]}'>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Pay</label>
    <input type="text" class="form-control"  id="pay" value='${employees[index][3]}'>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Location</label>
    <input type="text" class="form-control"  id="location" value='${employees[index][4]}'>
  </div>
 
  <button onClick="updateEmployee();" class="btn btn-primary">Update Employee</button>
</div>
`);
}
let addEmployee=()=>{
  employee.push([designation.value,name.value,contact.value,pay.value,location.value]);
  col_right.innerHTML=listEmployeeData();
}
let listEmployeeData=()=>{
  let str=
`<div class="container py-5">
<div class="row">
    <div class="col-sm-24">
      <div class="row ">
        <div class="col-sm-1 fw-bold">
          Des-
        </div>
        <div class="col-sm-2  fw-bold">
           Name
        </div>
        <div class="col-sm-2  fw-bold">
           Contact
        </div>
        <div class="col-sm-1  fw-bold">
           Pay
        </div>
        <div class="col-sm-2 fw-bold">
           Location
        </div>
        <div class="col-sm-2  fw-bold">
          Edit
        </div>
        <div class="col-sm-1  fw-bold">
          Delete
        </div>
      </div>
    </div>
  `;
for(i=0;i<employees.length;i++)
{
  str=str+`<div class="row py-2">
          <div class="col-sm-2">
            <div class="font-weight-bold">
            ${employees[i][0]}
            </div>
          </div>
          <div class="col-sm-1">
            ${employees[i][1]}
          </div>
          <div class="col-sm-1">
            ${employees[i][2]}
          </div>
          <div class="col-sm-2">
            ${employees[i][3]}
          </div>
          <div class="col-sm-2">
            ${employees[i][4]}
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editEmployee(${i})">Edit</button>
          </div>
          <div class="col-sm-1">
            <button class="btn btn-primary" onClick="deleteEmployee(${i})">Delete</button>
        
          </div>
          
        </div>`;
}
str=str+"</div></div>"
return(str);
}
let editEmployee=(index)=>{
    addFormObj6=AddForm;
    col_left.innerHTML=updateEmployeeForm(index);
    recordID.value=index;
}
let updateEmployee=()=>{
     let id=designation.value;
     let title=name.value;
     let type=contact.value;
     let salary=pay.value;
     let address=location.value;
     employees[recordID.value][0]=designation;
     employees[recordID.value][1]=name;
     employees[recordID.value][2]=contact;
     employees[recordID.value][3]=pay;
     employees[recordID.value][4]=location;
     col_left.innerHTML=employee();
     col_right.innerHTML=listEmployeeData();
     UpdateForm.style.display='none';
}
let deleteEmployee=(index)=>{
    employees.splice(index,1);
    col_right.innerHTML=listEmployeeData();
}