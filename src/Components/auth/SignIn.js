import React, { Component} from 'react'

export default class SignIn extends Component {
    render() {
        return (
          <div>
            <h2>Login</h2>
            <form className="pt-2 col-md-5" >
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <br/>
            <a href='/signup' style={{display:'block'}}>Don't have an Account? Register Now !</a>
          </div>
        )
      }
    }
