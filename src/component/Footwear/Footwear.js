import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import { addToCart } from "../../ducks/reducer";


 class Footwear extends Component {
  constructor() {
    super();

    this.state = {
        footwear: []
    }
}
componentDidMount() {
  axios.get("/api/products/footwear").then(response => {
    console.log(response);
    this.setState({
      footwear: response.data
    });
  });
}

addToCart(obj) {
  this.props.addToCart(obj)
  axios.post("/api/cart", obj );
  console.log(obj);
  
}

render() {
let displayFootwear = this.state.footwear.map((ele, i)=> {
  return (
      <div key={i}  style={{ float: "left" }} className="shop card m-5">
      <img  width="300px" height="300px" src={ele.image} alt="" />
      <div className="card-footer">
      <div>{ele.description}</div>
      <div>${ele.price}</div>
      <button className="btn btn-success" onClick={()=>this.addToCart((ele))}>Add To Cart</button>
      </div>
      </div>
  )
})
return (
<div>
 {displayFootwear}

 
</div>
)
}
}


export default connect( null, { addToCart } )(Footwear);
