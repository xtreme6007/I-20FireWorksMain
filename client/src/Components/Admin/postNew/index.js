import React from "react";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import ImageUploader from "../../ImageUploader";
import { useFormik } from "formik";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './index.css'


export default function PostNew() {
  const [brandList, setBrandList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
 

  
  useEffect( () => {
    getBrands()
    getCats()
      
  },[]);

// Function used to make apoi call to database to retrive Brands of fireworks  
  const getBrands = () => {
    Axios.get("/api/getBrands").then((res) => {
       setBrandList(res.data);
       console.log(brandList)
    });
  }
  // Function used to make api call to database to retrive Categories of fireworks  

    const getCats = () => {
      Axios.get("/api/getCategories").then((res) => {
       setCategoryList(res.data);
       console.log("CATLIST", categoryList)
    });

    }
    

  

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
      Axios.post("/api/admin/postNew", {
        name: formik.values.productName,
        category: formik.values.category,
        brand: formik.values.brand.toUpperCase(),
        price: formik.values.price,
        previewUrl: formik.values.url,
        description: formik.values.description,
      });
    },
  });

  return (
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
        <TextField
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
          label="Description"
        />
<br/>
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
        <Select
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.category}
          label="Category"
          style={{width: "30%"}}
        >
          {/* Map over categoryList to display values as menu items */}
            {categoryList.map((cat) => {
              // {console.log("INSIDE RETURNNNN",cat.Type)}
            return <MenuItem value={cat.Type}>{cat.Type}</MenuItem>
            })}
         
          
          </Select>
        <br/>
        {/* Price */}
        <TextField
          id="price"
          name="price"
          type="text"
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
        />

        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}
