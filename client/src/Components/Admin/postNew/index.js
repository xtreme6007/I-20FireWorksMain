import React from "react";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import ImageUploader from "../../ImageUploader";
import { useFormik } from "formik";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import './index.css'


export default function PostNew() {
  const [casePrice , setCasePrice] = useState();
  const [unit, setUnit] = useState();
  const [prodPrice, setProdPrice] = useState();
  
  useEffect(() => {
      setProdPrice(((casePrice / unit) * 3) * 1.0825)
    })




// Function used to post formik form
    const post = () => {
      Axios.post("/api/admin/postNew", {
        name: formik.values.productName,
        category: formik.values.category.toUpperCase(),
        brand: formik.values.brand.toUpperCase(),
        price: formik.values.price,
        previewUrl: formik.values.url,
        description: formik.values.description,
      }).then((res) => {
        console.log("hellooo")
      })
      
    }
  
// Setting inital Values for formik
  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      url: "",
      files: "",
    },
    onSubmit: (values) => {
      post()
      window.location.replace("/admin/viewProd");

    },
  });

  return (
    <>
    <Container maxWidth="sm" style={{backgroundColor: "green", borderRadius: "80px", marginTop: "25px"}}>
      <h1>Upload Product Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Product Name */}
        <TextField
          id="productName"
          name="productName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.productName}
          label="Product Name"
        />
        <br/>
{/* Description  */}
        {/* <TextField
          id="ategory"
          name="category"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.category}
          label="Category"
        />
<br/> */}
{/* Brand */}
        <TextField
          id="brand"
          name="brand"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.brand}
          label="Brand"
          className = "capitalize"
        />
        <br/>
        {/* Category */}
        <TextField
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.category}
          label="Category"
          // style={{width: "30%"}}
        />
         
        <br/>
        {/* Price */}
        <TextField
          id="price"
          name="price"
          type="float"
          onChange={formik.handleChange}
          value={formik.values.price}
          label="Price"
        />
          <br/>
          {/* Preview Url */}
        <TextField
          id="url"
          name="url"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.url}
          label="Preview Url"
        />
    
        <br/>
          {/* Component used to upload image */}
        <ImageUploader
          prodName={formik.values.productName}
          value={formik.values.files}
          onChange={formik.handleChange}
          style={{marginLeft: "15%"}}
        />

    <input type="file" accept="image/*" capture="camera" />

        <button type="submit">Submit</button>
      </form>
  
    </Container>
    <div style={{margin: "100px"}}>
    <form name= "Calculator">
<h1>Price Calculator</h1>
<label for= "case_price">Case Price</label>
      <input name= "case_Price" id="case_price"  onChange = {(e) => {
        setCasePrice(e.target.value)
        }}
      style= {{margin: "20px", aligin: "left"}}/>
      <br />
      <label for= "units">Units</label>
      <input name="units" id="units" onChange= {(e) => {setUnit(e.target.value)}} style={{margin: "20px", aligin: "left"}}/>
      <p>{prodPrice}</p>


    </form>
    </div>
    </>
  );
}
