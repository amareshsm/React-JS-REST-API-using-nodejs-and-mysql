import React from 'react'
import { Button,Card } from 'react-bootstrap'
import {  Link } from "react-router-dom";


class Landing extends React.Component {
  state = {
    
    loading: true,
    recipe: null,
  };



  async componentDidMount() { 
    const url = "http://localhost:5000/show";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipe: data, loading: false });
 
  }

  render() {
 
   if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.recipe) {
      return <div>didn't fetch data from api</div>;
    }
    return (
     <div>
      
        <div className="container">
<div className="row">
        
        
        {
        this.state.recipe.map((dynamicData)=>
          


        <div className="col-md-4 pt-4 pb-3 "    key={dynamicData.id}>

        <Card>
          <Card.Img variant="top" style={{height: '15rem'}} src={dynamicData.img}  />
          <Card.Body>
            <Card.Title className="font-weight-bold">{dynamicData.name}</Card.Title>
            <Card.Text style={{fontSize:'13px'}}>
            <span>PUBLISHER :</span>{dynamicData.publisher}
            </Card.Text>
            
            <Link to={"/show/"+dynamicData.id}>
        
            <Button variant="primary">SHOW DETAILS
        </Button>
        
            </Link>
        
          </Card.Body>
        </Card></div>)     
        
        }
        </div>
        </div>
  
      
   </div> 
    );
  }
}

export default Landing;
