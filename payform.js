let payForm=()=>{
	return(`
  <div id="AddForm">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Payer Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Amount</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Branch Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Payment Method</label>
    <input type="radiobutton" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Payer Contact</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <button onClick="buyAnItem();" class="btn btn-primary">Pay</button>
  </div>
  `);
}