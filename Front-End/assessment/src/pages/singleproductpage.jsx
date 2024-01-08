import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singleproductpage.css"
const SingleProductPage = () =>{


    const { id } = useParams();
    const [product, setproduct] = useState([]);

    useEffect(() => {
        const fetchsingleproduct = () => {
          axios
            .get(`http://localhost:5000/api/product/${id}`)
            .then((res) => {
              setproduct(res.data);
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
              setproduct([]);
            });
        };
    
        fetchsingleproduct();
      }, []);


    return(
        <div className="singlecontainer">
            <h1>
                {product.title}
            </h1>
            <h2>
                {product.price}
            </h2>
            <h2>
                {product.supplier}
            </h2>
        </div>
    )
}

export default SingleProductPage
