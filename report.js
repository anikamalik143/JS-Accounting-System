let listCompanyReport=()=>{
	let str=
`<div class="container py-5">
<div class="row">
		<div class="col-sm-12">
			<div class="row py-1.5">
				<div class="col-sm-2 fw-bold">
					Company Reg No
				</div>
				<div class="col-sm-4 fw-bold">
					Company Name
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
let listAccountReport=()=>{
	let str=
`<div class="container py-5">
<div class="row">
		<div class="col-sm-12">
			<div class="row py-1.5">
				<div class="col-sm-2 fw-bold">
					Account No
				</div>
				<div class="col-sm-4 fw-bold">
					Account Title
				</div>
				<div class="col-sm-2 fw-bold">
					Branch Name
				</div>
				<div class="col-sm-2 fw-bold">
					Branch Code
				</div>
				<div class="col-sm-2 fw-bold">
					Account Holder Contact
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
       for(i=0;i<account.length;i++)
    {
    	if(accounts[i][1]==searchID1)
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${accounts[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${accounts[i][1]}
					</div>
					<div class="col-sm-2">
						${accounts[i][2]}
					</div>
					<div class="col-sm-2">
						${accounts[i][3]}
					</div>
					<div class="col-sm-2">
						${accounts[i][4]}
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

for(i=0;i<account.length;i++)
{
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${accounts[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${accounts[i][1]}
					</div>
					<div class="col-sm-2">
						${accounts[i][2]}
					</div>
					<div class="col-sm-2">
						${accounts[i][3]}
					</div>
					<div class="col-sm-2">
						${accounts[i][4]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editAccount(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteAccount(${i})">Delete</button>
				
					</div>
					
				</div>`;
}
str=str+"</div></div>"
}
return(str);
}

let listCustomerReport=()=>{
	let str=
`<div class="container py-5">
<div class="row">
		<div class="col-sm-12">
			<div class="row py-1.5">
				<div class="col-sm-2 fw-bold">
					Sr No
				</div>
				<div class="col-sm-4 fw-bold">
				      Name
				</div>
				<div class="col-sm-2 fw-bold">
					Purchase Item Name
				</div>
				<div class="col-sm-2 fw-bold">
					Contact
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
		let searchID3=parseInt(id);
       for(i=0;i<customer.length;i++)
    {
    	if(customer[i][2]==searchID3)
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${customer[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${customer[i][1]}
					</div>
					<div class="col-sm-2">
						${customer[i][2]}
					</div>
					<div class="col-sm-2">
						${customer[i][3]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editCustomer(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteCustomer(${i})">Delete</button>
				
					</div>
					
				</div>`;
	        }
}
else{

for(i=0;i<customer.length;i++)
{
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${customer[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${customer[i][1]}
					</div>
					<div class="col-sm-2">
						${customer[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editCustomer(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteCustomer(${i})">Delete</button>
				
					</div>
					
				</div>`;
}
str=str+"</div></div>"
}
return(str);
}
let listItemReport=()=>{
	let str=
`<div class="container py-5">
<div class="row">
		<div class="col-sm-12">
			<div class="row py-1.5">
				<div class="col-sm-2 fw-bold">
					Item Name
				</div>
				<div class="col-sm-4 fw-bold">
				      Quantity
				</div>
				<div class="col-sm-2 fw-bold">
					Price
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
		let searchID4=parseInt(id);
       for(i=0;i<item.length;i++)
    {
    	if(items[i][3]==searchID4)
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${item[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${item[i][1]}
					</div>
					<div class="col-sm-2">
						${item[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editItem(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteItem(${i})">Delete</button>
				
					</div>
					
				</div>`;
	        }
}
else{

for(i=0;i<item.length;i++)
{
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${item[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${item[i][1]}
					</div>
					<div class="col-sm-2">
						${item[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editItem(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteItem(${i})">Delete</button>
				
					</div>
					
				</div>`;
}
str=str+"</div></div>"
}
return(str);
}
let listVendorReport=()=>{
	let str=
`<div class="container py-5">
<div class="row">
		<div class="col-sm-12">
			<div class="row py-1.5">
				<div class="col-sm-2 fw-bold">
					Company Name
				</div>
				<div class="col-sm-4 fw-bold">
				      Email Address
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
       for(i=0;i<vendor.length;i++)
    {
    	if(vendors[i][4]==searchID5)
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${vendor[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${vendor[i][1]}
					</div>
					<div class="col-sm-2">
						${vendor[i][2]}
					</div>
					<div class="col-sm-2">
						${vendor[i][3]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editVendor(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteVendor(${i})">Delete</button>
				
					</div>
					
				</div>`;
	        }
}
else{

for(i=0;i<vendor.length;i++)
{
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${vendor[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${vendor[i][1]}
					</div>
					<div class="col-sm-2">
						${vendor[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editVendor(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteVendor(${i})">Delete</button>
				
					</div>
					
				</div>`;
}
str=str+"</div></div>"
}
return(str);
}
let listEmployeeReport=()=>{
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
					Contact
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
       for(i=0;i<employee.length;i++)
    {
    	if(employees[i][5]==searchID6)
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${employee[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${employee[i][1]}
					</div>
					<div class="col-sm-2">
						${employee[i][2]}
					</div>
					<div class="col-sm-2">
						${employee[i][3]}
					</div>
					<div class="col-sm-2">
						${employee[i][4]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editEmployee(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteEmployee(${i})">Delete</button>
				
					</div>
					
				</div>`;
	        }
}
else{

for(i=0;i<employee.length;i++)
{
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${employee[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${employee[i][1]}
					</div>
					<div class="col-sm-2">
						${employee[i][2]}
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
let listBankReport=()=>{
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
					Contact
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
       for(i=0;i<bank.length;i++)
    {
    	if(banks[i][6]==searchID7)
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

for(i=0;i<bank.length;i++)
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
let Reports=(id)=>{
     if(id==1){
     	return listCompanyReport();
     }
     else if(id==2){
     	return listAccountReport();
     }
     else if(id==3){
     	return listCustomerReport();
     }
     else if(id==4){
     	return listItemReport();
     }
     else if(id==5){
     	return listVendorReport();
     }
     else if(id==6){
     	return listEmployeeReport();
     }
     else if(id==7){
     	return listBankReport();
     }
}