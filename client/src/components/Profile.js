import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }
  

  componentDidMount() {

    if(localStorage.getItem('usertoken')!==null){
      var token=localStorage.getItem('usertoken')
      const decoded = jwt_decode(token)
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email
      })
    }

  }

  render() {
    if(localStorage.getItem('usertoken')!==null){
      return (
        <div className="container">
          <div className="jumbotron mt-4 shadow-lg">
            <div className="col-sm-8 mx-auto">
              <h3 className="text-center">PROFILE</h3>
            </div>
            <table className="table col-md-6 mx-auto ">
              <tbody>
                <tr>
                  <td>Fist Name</td>
                  <td>{this.state.first_name}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{this.state.last_name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }else{
      return (<div>
             <h3 className=" font-style-bold text-center pt-5">Please Login</h3>
        </div>)

    }
    
  }
}

export default Profile
