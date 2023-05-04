let sellForm=()=>{
	return(`
  <div id="AddForm py-5 px-5 mt-3 ms-5">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> Name Of Item</label>
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
    <label for="exampleInputPassword1" class="form-label">Seller Contact</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <button onClick="sellAnItem();" class="btn btn-primary">Sell An Item</button>
  </div>
  `);
}
