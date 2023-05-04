let addBankForm=()=>{
  let str=
`<div class="container py-5">
<div class="row">
    <div class="col-sm-12">
      <div class="row py-1.5">
        <div class="col-sm-2 fw-bold">
          Branch Name
        </div>
        <div class="col-sm-4 fw-bold">
           Code
        </div>
        <div class="col-sm-2 fw-bold">
           Conatct
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
    let searchID7=parseInt(id);
       for(i=0;i<banks.length;i++)
    {
      if(banks[i][0]==searchID7)
  str=str+`<div class="row py-2">
          <div class="col-sm-2">
            <div class="font-weight-bold">
            ${bank[i][0]}
            </div>
          </div>
          <div class="col-sm-4">
            ${bank[i][1]}
          </div>
          <div class="col-sm-2">
            ${bank[i][2]}
          </div>
           <div class="col-sm-2">
            ${bank[i][3]}
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editBank(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteBank(${i})">Delete</button>
        
          </div>
          
        </div>`;
          }
}
else{

for(i=0;i<banks.length;i++)
{
  str=str+`<div class="row py-2">
          <div class="col-sm-2">
            <div class="font-weight-bold">
            ${bank[i][0]}
            </div>
          </div>
          <div class="col-sm-4">
            ${bank[i][1]}
          </div>
          <div class="col-sm-2">
            ${bank[i][2]}
          </div>
          <div class="col-sm-2">
            ${bank[i][3]}
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
}
return(str);
}
let bank=(id)=>{
     if(id==7){
      return addBankForm1();
      return listBankData();
     }
     
}