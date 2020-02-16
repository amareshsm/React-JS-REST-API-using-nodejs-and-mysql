import React from 'react'
import jwt_decode from 'jwt-decode'
import { Button,Card } from 'react-bootstrap'
import {  Link } from "react-router-dom";
class edit_items extends React.Component {
  constructor() {
    super()
    this.state = {
        loading: true,
        recipe: null,
        errors: {}
    }    
    if(localStorage.getItem('usertoken')!==null){
      var token=localStorage.getItem('usertoken')
      const decoded = jwt_decode(token)
      this.state={
        userid:decoded.id,
      }
    } 
  }  

 async componentDidMount() {
       const url = "http://localhost:5000/show";
        const response = await fetch(url);
        let data = await response.json();     
        data = data.filter(l => {
          return l.publisher_id.match(this.state.userid);
        });
        this.setState({ recipe: data, loading: false });
  }

  render() {
    if(localStorage.getItem('usertoken')!==null){
        if (this.state.loading) {
            return <div>loading...</div>;
          }      
          if (!this.state.recipe) {
            return <div>didn't get a person</div>;
          }
      return (
        <div>      
        <div className="container">
<div className="row">       
        
        {
        this.state.recipe.map((dynamicData)=>                 
        <div className="col-md-4 pt-4 pb-3 " key={dynamicData.id} >

        <Card>
          <Card.Img variant="top" style={{height: '15rem'}} src={dynamicData.img}  />
          <Card.Body>
            <Card.Title className="font-weight-bold">{dynamicData.name}</Card.Title>
            <Card.Text style={{fontSize:'13px'}}>
            <span>PUBLISHER :</span>{dynamicData.publisher}
            </Card.Text>
            
            <Link to={"/edit/"+dynamicData.id}>
        
            <Button variant="primary" className="float-right">EDIT </Button>
        
            </Link>
        
          </Card.Body>
        </Card></div>)     
        
        }
        </div>
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

export default edit_items
