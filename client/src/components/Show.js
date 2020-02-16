import React from 'react'
import { Button,Card } from 'react-bootstrap'
import {
  Link
} from "react-router-dom";


class Show extends  React.Component{

  state = {
    loading: true,
    recipe: null,
  };


  async componentDidMount()
  {
    
    const url = "http://localhost:5000/show"+this.props.match.params.id;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipe: data, loading: false });
  }
  

 render(){

  
  if (this.state.loading) {
    return <div>loading...</div>;
  }

  if (!this.state.recipe) {
    return <div>didn't get a person</div>;
  }
   return( 
       
       
       <div className="pt-5">
                {
        this.state.recipe.map((dynamicData)=>
        <Card className="shadow-lg"   key={dynamicData.id}>
        <div className="row">         
        <div className="col-xl-4">
        <Card.Img variant="top" style={{height: '15rem'}} src={dynamicData.img}  />
        </div>
        <div className="col-xl-8">  
          <Card.Body>
            <Card.Title className="font-weight-bold" style={{fontSize:"24px"}}>{dynamicData.name}</Card.Title>
            <Card.Text style={{fontSize:'13px'}}>
            <span>PUBLISHER :</span>{dynamicData.publisher}
            </Card.Text>       
            <Card.Title style={{fontSize:"18px"}}>INGREDIENTS</Card.Title>
 
            <Card.Text style={{fontSize:'13px'}}>
            {dynamicData.description}
            </Card.Text>        
            
          </Card.Body>
        </div>
        
        </div>
        </Card>
 
        
        )     
        
        }
<div className="pt-5 float-right">
        <Link to="/">
        
 <Button variant="primary">GO BACK</Button>

 </Link>    </div>     
     </div>
     
     );
 }   
}

export default Show