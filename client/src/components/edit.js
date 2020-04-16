import React from 'react'
import { Button} from 'react-bootstrap'
import {
  Link
} from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { update_req } from './UserFunctions'
import axios from 'axios'


class edit extends  React.Component{

constructor(){
    super()
  this.state = {
      id:'',
      name:'',
      description:'',
      publisher:'',
      img:'',
    loading:true,
     showcontent:true,
    user_content:null,
    recipe:null,
    errors: {}
  }
  if(localStorage.getItem('usertoken')!==null){
    var token=localStorage.getItem('usertoken')
    const decoded = jwt_decode(token)
    this.state={
      userid:decoded.id,
    }
  } 
  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}  
   async componentDidMount()
  {
        const url = "http://localhost:5000/show";
        const response = await fetch(url);
        let content = await response.json();     
        content = content.filter(l => {
          return l.publisher_id.match(this.state.userid);
        });
        this.setState({ user_content:content });
    
      var arr_val=[]
     for(var dum=0;dum<this.state.user_content.length;dum++){
               arr_val.push(this.state.user_content[dum].id)
    }
    if(arr_val.indexOf(Number(this.props.match.params.id)) > -1){
        this.setState({
            showcontent:true
        })
    }else{
        this.setState({
            showcontent:false

        })
    }

    axios.get('http://localhost:5000/show'+this.props.match.params.id)
    .then(response => {
        this.setState({
            id:response.data[0].id,
            name: response.data[0].name,
            publisher: response.data[0].publisher,
            description: response.data[0].description,
            img: response.data[0].img,
            loading:false
        })
    })
    .catch(function(error) {
        console.log(error)
    })


  }
  
onChange(e) {
    this.setState({        
    
    [e.target.name]: e.target.value 
        })
  }

  onSubmit(e) {
    e.preventDefault()

    const update_con = {
      id:this.state.id,
      name: this.state.name,
      publisher: this.state.publisher,
      description: this.state.description,
      img: this.state.img
    }

    update_req(update_con).then(res => {
      this.props.history.push(`/edit_items`)
    })
  }
 render(){

  
  if (this.state.loading) {
    return <div>loading...</div>;
  }


if(localStorage.getItem('usertoken')!==null ){
   
       

    if(this.state.showcontent===true){
        return( 
       <div> <div className="container" >
                    <div className="row">
                      <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                          <h1 className="h3 mb-3 font-weight-normal">Edit items</h1>
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
                            <label htmlFor="email">Item description</label>
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
                            <label htmlFor="password">Img URL</label>
                            <input
                              type="text"
                              className="form-control"
                              name="img"
                              placeholder="enter image url"
                              value={this.state.img}
                              onChange={this.onChange}
                            />
                          </div>
                          <button type="submit" className="btn btn-lg btn-primary btn-block" >
                                 save changes
                          </button>
                        </form>
                      </div>
                    </div>
        </div>       
         
        
<div className="pt-5 float-right">
        <Link to="/edit_items">
        
 <Button variant="primary">GO BACK</Button>

 </Link>    </div>     
     </div>
     
     )}
     else{
         return (<div>
            
             <h3 className=" font-style-bold text-center pt-5">Item cannot be accessed</h3>
             </div>)
     }
    
    
    
    
    }
     else{
         return (<div>
             <h3 className=" font-style-bold text-center pt-5">Please Login</h3>


         </div>)
     }
 }   
}

export default edit