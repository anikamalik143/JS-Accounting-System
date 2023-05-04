let addFormObj2=null;
let addAccountForm1=()=>{
	return(`<div id="AddForm">
		<h1 class="mt-3 px-5">Add New Account</h1>
     <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Account No</label>
        <input type="text" id="accountNo" class="form-control" aria-describedby="emailHelp">
     
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Account Title</label>
       <input type="text" class="form-control" id="accountTitle">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Branch Name</label>
       <input type="text" class="form-control" id="branchName">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Branch Code</label>
       <input type="text" class="form-control" id="branchCode">
      </div>
      <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Account Holder Contact</label>
       <input type="text" class="form-control" id="accountHolderContact">
      </div>
 
      <button onClick="addAccountForm();" class="btn btn-primary">Add New Account</button>
 </div>
`);
}
updateAccountForm=(index)=>{
  return(
    `
<div id="UpdateForm">
  <h1 class="mt-3 px-5">Update An Account</h1>
      <input type='hidden' id='recordID' value='${index}'/> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Account No</label>
    <input type="text" value='${accounts[index][0]}' id="accountNo" class="form-control" aria-describedby="emailHelp">
     
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Account Title</label>
    <input type="text"  class="form-control" value='${accounts[index][1]}' id="accountTitle">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Branch Name</label>
    <input type="text" class="form-control"  id="branchName" value='${accounts[index][2]}'>
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Branch Code</label>
    <input type="text" class="form-control"  id="branchCode" value='${accounts[index][3]}'>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Account Holder Contact</label>
    <input type="text" class="form-control"  id="accountHolderContact" value='${accounts[index][4]}'>
  </div>
 
  <button onClick="updateAccount();" class="btn btn-primary">Update Account</button>
</div>
`);
}
let addAccount=()=>{
  account.push([accountNo.value,accountTitle.value,branchName.value,branchCode.value,accountHolderContact.value]);
  col_right.innerHTML=listAccountData();
}
let listAccountData=()=>{
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
        <div class="col-sm-2 ms-4 fw-bold">
          Edit
        </div>
        <div class="col-sm-2 ms-3 fw-bold">
          Delete
        </div>
      </div>
</div>
  `;

for(i=0;i<accounts.length;i++)
{
  str=str+`<div class="row ">
        <div class="col-sm-2 ">
          ${accounts[i][0]}
        </div>
        <div class="col-sm-2 ms-1 ">
            ${accounts[i][1]}
        </div>
        <div class="col-sm-2 ms-3 ">
            ${accounts[i][2]}
        </div>
       <div class="col-sm-2 ms-3">
            <button class="btn btn-primary" onClick="editAccount(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="deleteAccount(${i})">Delete</button>
        
          </div>
      </div>`;
  }
 str=str+"</div></div>"
 return(str);
}
let editAccount=(index)=>{
    addFormObj2=AddForm;
    col_left.innerHTML=updateAccountForm(index);
    recordID.value=index;
}
let updateAccount=()=>{
     let id=accountNo.value;
     let title=accountTitle.value;
     let name=branchName.value;
     let type=branchCode.value;
     let contact=accountHolderContact.value;
     accounts[recordID.value][0]=accountNo;
     accounts[recordID.value][1]=accountTitle;
     accounts[recordID.value][2]=branchName;
     accounts[recordID.value][3]=branchCode;
     accounts[recordID.value][4]=accountHolderContact;
     col_left.innerHTML=account();
     col_right.innerHTML=listAccountData();
     UpdateForm.style.display='none';
}
let deleteAccount=(index)=>{
    accounts.splice(index,1);
    col_right.innerHTML=listAccountData();
}