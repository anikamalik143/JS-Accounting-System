let addVendorForm=()=>{
  let str=
`<div class="container py-5">
<div class="row">
    <div class="col-sm-12">
      <div class="row py-1.5">
        <div class="col-sm-2 fw-bold">
          Company Name
        </div>
        <div class="col-sm-4 fw-bold">
          Contact
        </div>
        <div class="col-sm-2 fw-bold">
          Office Address
        </div>
        <div class="col-sm-2 fw-bold">
          Offer Services
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
    let searchID5=parseInt(id);
       for(i=0;i<vendors.length;i++)
    {
      if(vendors[i][0]==searchID5)
  str=str+`<div class="row py-2">
          <div class="col-sm-2">
            <div class="font-weight-bold">
            ${vendors[i][0]}
            </div>
          </div>
          <div class="col-sm-2">
            ${vendors[i][1]}
          </div>
          <div class="col-sm-2">
            ${vendors[i][2]}
          </div>
          <div class="col-sm-1">
            ${vendors[i][3]}
          </div>
          <div class="col-sm-1">
            <button class="btn btn-primary" onClick="editVendors(${i})">Edit</button>
          </div>
          <div class="col-sm-1">
            <button class="btn btn-primary" onClick="deleteVendors(${i})">Delete</button>
        
          </div>
          
        </div>`;
          }
}
else{

for(i=0;i<vendors.length;i++)
{
  str=str+`<div class="row py-2">
          <div class="col-sm-2">
            <div class="font-weight-bold">
            ${vendors[i][0]}
            </div>
          </div>
          <div class="col-sm-4">
            ${vendors[i][1]}
          </div>
          <div class="col-sm-2">
            ${vendors[i][2]}
          </div>
           <div class="col-sm-2">
            ${vendors[i][3]}
          </div>
          <div class="col-sm-1">
            <button class="btn btn-primary" onClick="editVendors(${i})">Edit</button>
          </div>
          <div class="col-sm-1">
            <button class="btn btn-primary" onClick="deleteVendors(${i})">Delete</button>
        
          </div>
          
        </div>`;
}
str=str+"</div></div>"
}
return(str);
}
let vendor=(id)=>{
     if(id==5){
      return addVendorForm1();
      return listVendorData();
     }
     
}