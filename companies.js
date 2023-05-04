let addCompanyForm=()=>{
  let str=
`<div class="container py-5">
<div class="row">
    <div class="col-sm-12">
      <div class="row py-1.5">
        <div class="col-sm-2 fw-bold">
          Company ID
        </div>
        <div class="col-sm-4 fw-bold">
          Course Name
        </div>
        <div class="col-sm-2 fw-bold">
          Company Conatct
        </div>
        <div class="col-sm-2 fw-bold">
          Company Type
        </div>
        <div class="col-sm-2 fw-bold">
          Company Location
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
    let searchID1=parseInt(id);
       for(i=0;i<company.length;i++)
    {
      if(company[i][0]==searchID1)
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
}
else{

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
}
return(str);
}
let companies=(id)=>{
     if(id==1){
      return addCompanyForm();
      return listCompaniesData();
     }
     
}