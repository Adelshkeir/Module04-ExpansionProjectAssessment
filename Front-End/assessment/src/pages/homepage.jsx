import React, { useEffect, useState } from "react"
import axios from "axios"
import CardProduct from "../components/cardproduct";
import "./homepage.css"
import Navbar from "../components/navbar";
const Homepage = () =>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = () => {
          axios
            .get(`http://localhost:5000/api/product?category_name=kousa1`)
            .then((res) => {
              setProducts(res.data);
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
              setProducts([]);
            });
        };
    
        fetchProducts();
      }, []);


return(
    <div>
<Navbar />
    <div className="container">
    
    {products.map((product, index) => (
  <CardProduct key={index} product={product} />
))}

    </div>
    </div>
)
}

export default Homepage