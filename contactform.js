let contactForm=()=>{
	return(`<div class="container">
	<div class="row py-5 ml-4 ms-5">
		<div class="col-sm-6">
  <div class="mb-3">
  	 <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">First Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
    <label for="exampleInputEmail1" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
   
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Pick Our Services</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <button onClick="submit();" type="submit" class="btn btn-primary">Submit</button>
		</div>
	</div>
</div>`)
}