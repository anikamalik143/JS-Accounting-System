option=parseInt(option);
if(option==1){
	content.innerHTML=home()
}
else if(option==2){
	content.innerHTML=about();
}
else if(option==3){
	content.innerHTML=services();
}
else if(option==4){
	col_left.innerHTML=contact();
	col_right.innerHTML=contactForm();
}
if(option==5){
	col_left.innerHTML=companies(1);
	col_right.innerHTML=listCompaniesData(1);
}
else if(option==6){
	col_left.innerHTML=account(2);
	col_right.innerHTML=listAccountData(2);
}
else if(option==7){
	col_left.innerHTML=customers(3);
	col_right.innerHTML=listCustomerData(3);
}
else if(option==8){
	col_left.innerHTML=item(4);
	col_right.innerHTML=listItemData(4);
}
else if(option==9){
	col_left.innerHTML=vendor(5);
	col_right.innerHTML=listVendorData(5);
}
else if(option==10){
	col_left.innerHTML=employee(6);
	col_right.innerHTML=listEmployeeData(6);
}
else if(option==11){
	col_left.innerHTML=bank(7);
	col_right.innerHTML=listBankData(7);
}
  if(option==12){
	content.innerHTML=Reports(8);
}
else if(option==13){
	content.innerHTML=listCompaniesData(1);
}
else if(option==14){
	content.innerHTML=listAccountData(2);
}
else if(option==15){
	content.innerHTML=listCustomerData(3);
}
else if(option==16){
	content.innerHTML=listItemData(4);
}
else if(option==17){
	content.innerHTML=listVendorData(5);
}
else if(option==18){
	content.innerHTML=listEmployeeData(6);
}

else if(option==19){
	content.innerHTML=listBankData(7);
}



