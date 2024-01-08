import React, { useEffect, useState } from "react"
import axios from "axios"
import Adminproduct from "../components/admincards";
import "./homepage.css"
import Navbar from "../components/navbar";
const Admin = () =>{
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

      const handleDelete = async (deletedproductId) => {
        // Update the Admin state after deletion
        setProducts((prevproduct) => prevproduct.filter((product) => products.id !== deletedproductId));
      };




return(
    <div>
<Navbar />
<button>Add Products</button>
    <div className="container">
    
    {products.map((product, index) => (
  <Adminproduct key={index} product={product} onDelete={handleDelete}/>
))}

    </div>
    </div>
)
}

export default Admin