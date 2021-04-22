import React from "react";
import {  Card } from "react-bootstrap";

function Cardcontainer(props) {
     let Searchcondition =props.Conditionsearch
     let searchedmovielist=props.list.filter((x)=>(x.rating>=Searchcondition.rating&&x.name.toLowerCase().includes(Searchcondition.name.toLowerCase())))
    console.log(Searchcondition) 
    console.log(searchedmovielist)
    return (
        <div className="Cardcontainer">
      {searchedmovielist.map((movie)=>
      <Card className="bg-dark text-white" style={{ width: "30rem" }}>
      <Card.Img
        src={movie.posterurl}
        alt="Card image"
        style={{filter: 'blur(1px)'}}
      />
      <Card.ImgOverlay>
        <Card.Title style={{ textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>{movie.name}</Card.Title>
        <Card.Text style={{ textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>
          {movie.description}
        </Card.Text>
        <Card.Text>rating : {movie.rating} Stars</Card.Text>
      </Card.ImgOverlay>
    </Card>
      )}
      
    </div>

      
    );
}

export default Cardcontainer;
