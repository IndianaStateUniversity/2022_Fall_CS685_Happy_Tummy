import React from 'react'

const Support = () => {
  return (
    <div style={{width:'100%', display:'flex'}}>

        <form className="pt-2 col-md-5">
        <h3>Please submit your query</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label htmlFor="descr">Description</label>
            <textarea rows={4} type="textbox" className="form-control" id="descr" placeholder="Enter description" required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  

        <br/><br/>
      
      <div id='div2' style={{paddingLeft:200}}>
        <h5>Or you can email us at: <a href = "mailto: support.happytummy.com">support.happytummy.com</a></h5>
      </div>
    </div>   
  )
}

export default Support
