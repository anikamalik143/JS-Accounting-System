let addEmployeeForm=()=>{
  let str=
`<div class="container py-5">
<div class="row">
    <div class="col-sm-12">
      <div class="row py-1.5">
        <div class="col-sm-2 fw-bold">
          Designation
        </div>
        <div class="col-sm-4 fw-bold">
           Name
        </div>
        <div class="col-sm-2 fw-bold">
           Conatct
        </div>
        <div class="col-sm-2 fw-bold">
          Pay
        </div>
        <div class="col-sm-2 fw-bold">
         Location
        </div>
        <div class="col-sm-2 fw-bold">
          Edit
        </div>
        <div class="col-sm-2 fw-bold">
          Delete
        </div>
      </div>
    
  `;
  if(id!=""){
    let searchID6=parseInt(id);
       for(i=0;i<employees.length;i++)
    {
      if(employees[i][0]==searchID6)
  str=str+`<div class="row py-2">
          <div class="col-sm-2">
            <div class="font-weight-bold">
            ${employees[i][0]}
            </div>
          </div>
          <div class="col-sm-4">
            ${employees[i][1]}
          </div>
          <div class="col-sm-2">
            ${employees[i][2]}
          </div>
           <div class="col-sm-2">
            ${employees[i][3]}
          </div>
           <div class="col-sm-2">
            ${employees[i][4]}
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editCourse(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteCourse(${i})">Delete</button>
        
          </div>
          
        </div>`;
          }
}
else{

for(i=0;i<employees.length;i++)
{
  str=str+`<div class="row py-2">
          <div class="col-sm-2">
            <div class="font-weight-bold">
            ${employees[i][0]}
            </div>
          </div>
          <div class="col-sm-4">
            ${employees[i][1]}
          </div>
          <div class="col-sm-2">
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
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteEmployee(${i})">Delete</button>
        
          </div>
          
        </div>`;
}
str=str+"</div></div>"
}
return(str);
}
let employee=(id)=>{
     if(id==6){
      return addEmployeeForm1();
      return listEmployeeData();
     }
     
}