let addAccountForm=()=>{
	let str=`<div class="container py-5">
<div class="row">
    <div class="col-sm-24">
      <div class="row ">
        <div class="col-sm-2 fw-bold">
          Account No
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
           Account Title
        </div>
        <div class="col-sm-2 ms-3 fw-bold">
           Branch Name
        </div>
         <div class="col-sm-2 ms-3 fw-bold">
           Branch Code
        </div>
         <div class="col-sm-2 ms-3 fw-bold">
           Acc Holder Contact
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
  let searchID2=parseInt(id);
  for(i=0;i<accounts.length;i++)
  {
    if(account[i][0]==searchID2)
      str=str+`<div class="row ">
        <div class="col-sm-2 fw-bold">
          ${accounts[i][0]}
        </div>
        <div class="col-sm-2 ms-1 fw-bold">
            ${accounts[i][1]}
        </div>
        <div class="col-sm-2 ms-3 fw-bold">
            ${accounts[i][2]}
        </div>
        <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editAccount(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteAccount(${i})">Delete</button>
        
          </div>
      </div>`;
  }
}
else{
  for(i=0;i<accounts.length;i++)
  {
    str=str+`<div class="row ">
        <div class="col-sm-2">
          ${accounts[i][0]}
        </div>
        <div class="col-sm-2 ms-1 ">
            ${accounts[i][1]}
        </div>
        <div class="col-sm-2 ms-3">
            ${accounts[i][2]}
        </div>
        <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editAccounts(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteAccounts(${i})">Delete</button>
        
          </div>
      </div>`;
  }
str=str+"</div></div>"
}
return(str);
}
let account=(id)=>{
  if (id==2){
    return addAccountForm1();
    return listAccountdata();
  }

}