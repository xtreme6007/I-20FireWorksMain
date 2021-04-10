import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function PostNew() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("")
  const [url, setUrl] = useState('')

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/admin/postNew", {
      name: productName,
      category: category,
      price: price,
      previewUrl: url
    }).then(() => {
      alert("Succseful Insert");
    });
  };

  return (
    <>
    
      <div className="form">
        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        ></input>
        <label>Category:</label>
        <select
          type="select"
          name="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
            <option>Large Pie</option>
            <option>Medium Pie</option>
            <option>Small Pie</option>
            <option>Artilleray Shells</option>
            <option>Foutain</option>
            <option>Novelty</option>
        
        </select>
        <label>Price</label>
        <input
          type="text"
          name="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <label>Preview URL</label>
        <input
          type="text"
          name="URL"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            submitReview();
          }}
        >
          Submit
        </button>
      </div>
      
     
    </>
  );
}
