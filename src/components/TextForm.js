import React from 'react'

export default function TextForm(props) {
  return (
    <div>
      <form>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <label for="myBox" class="form-label">TextArea</label>
    <textarea className="form-control" id="myBox" rows="3"></textarea>
  </div>
  {/* <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button> */}
</form>
    </div>
  )
}
