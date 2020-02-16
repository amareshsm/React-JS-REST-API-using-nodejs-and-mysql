import React, { Component } from 'react'
import { add_new_item } from './UserFunctions'
import jwt_decode from 'jwt-decode'

class add_items extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      publisher: '',
      description: '',
      img: '',
      publisher_id:'',
    
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {

    if(localStorage.getItem('usertoken')!==null){
      var token=localStorage.getItem('usertoken')
      const decoded = jwt_decode(token)
      this.setState({
        publisher_id:decoded.id
      })
    }

  }




  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
       console.log("submiteed")
    const newitem = {

      name: this.state.name,
      publisher: this.state.publisher,
      description: this.state.description,
      img: this.state.img,
    publisher_id:this.state.publisher_id,
    }
    add_new_item(newitem).then(res => {
    
      this.props.history.push(`/login`);
     })
  }

  render() {
    

      if(localStorage.getItem('usertoken')!==null){
return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Add items</h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter the name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Publisher Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="publisher"
                  placeholder="Enter the publisher name"
                  value={this.state.publisher}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Enter item description"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">img</label>
                <input
                  type="text"
                  className="form-control"
                  name="img"
                  placeholder="enter image url"
                  value={this.state.img}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block "
              >
                Add item
              </button>
            </form>
          </div>
        </div>
      </div>)
      }
      else{
        return (
          <div>

<h3 className=" font-style-bold text-center pt-5">Please Login</h3>

          </div>
        )
        
      }
    
  }
}

export default add_items
