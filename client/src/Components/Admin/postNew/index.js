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
  const [brandList, setBrandList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [open, setOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false)


  
  useEffect( () => {
    getBrands()
    getCats()
    console.log(submitSuccess)
      
  },[]);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

// Function used to make apoi call to database to retrive Brands of fireworks  
  const getBrands = () => {
    Axios.get("/api/getBrands").then((res) => {
       setBrandList(res.data);
    });
  }
  // Function used to make api call to database to retrive Categories of fireworks  

    const getCats = () => {
      Axios.get("/api/getCategories").then((res) => {
       setCategoryList(res.data);
    });

    }
    
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const post = () => {
      Axios.post("/api/admin/postNew", {
        name: formik.values.productName,
        category: formik.values.category.toUpperCase(),
        brand: formik.values.brand.toUpperCase(),
        price: formik.values.price,
        previewUrl: formik.values.url,
        description: formik.values.description,
        units: formik.values.unit_amount,
        paid: formik.values.paid
      }).then((res) => {
        console.log("hellooo")
      })
      
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
      unit_amount: "",
      paid: "",
    },
    onSubmit: (values) => {
      post()
      window.location.replace("/admin/viewProd");

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
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
          label="Total Case Price"
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
          <TextField
          id="unit_amount"
          name="unit_amount"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.unit_amount}
          label="How many Units?"
        />
    
        <br/>
          {/* Component used to upload image */}
        <ImageUploader
          prodName={formik.values.productName}
          value={formik.values.files}
          onChange={formik.handleChange}
          style={{marginLeft: "15%"}}
        />

        <button type="submit">Submit</button>
      </form>

      {open === true ? (
          submitSuccess === true ?
        (<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Successfuly Loged In!
          </Alert>
        </Snackbar>)
        : 
        (<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Username/Password is not correct
          </Alert>
        </Snackbar>)
      ) : null}
    </Container>
  );
}
