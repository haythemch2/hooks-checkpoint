import React from "react";
import {  Card } from "react-bootstrap";

function Cardcontainer(props) {

    return (

      
        <div className="Cardcontainer">
      {props.list.map((movie)=>
      <Card className="bg-dark text-white" style={{ width: "30rem" }}>
      <Card.Img
        src={movie.posterurl}
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
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
