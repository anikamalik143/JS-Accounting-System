let buyForm=()=>{
	return(`
  <div id="AddForm py-5 px-5">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Quantity</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Buyer Contact</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <button onClick="buyAnItem();" class="btn btn-primary">Buy An Item</button>
  </div>
  `);
}