import React from "react";
import { Link } from 'react-router-dom';
// import { useAuthContext } from '../hooks/useAuthContext';
// import jwt_decode from 'jwt-decode'
import axios from "axios";


const Adminproduct = ({ product,onDelete }) => {
  // const { user } = useAuthContext()
  //   const decodedToken = jwt_decode(user.token);
  const ondelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/product/${product.id}`)
    //   {
    //           headers: {
    //         Authorization: `Bearer ${user.token}`,
    //  } },);
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      onDelete(product.id);
      // Handle success case here
    } catch (error) {
      console.error('There was an error!', error);
    }
   };




  console.log(product);
  return (
      <div className="card">
        <h1>
            {product.title}
        </h1>
        <p>
            {product.price}
        </p>
        <p>
            {product.supplier}
        </p>
        
        <button>Edit</button>
        <button onClick={ondelete}>Delete</button>
      </div>

  );
};

export default Adminproduct;
