import React from "react";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import ImageUploader from "../../ImageUploader";
import { useFormik } from "formik";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

export default function PostNew() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [progress, setProgress] = useState(0);
  let title;

  // const submitProduct = () => {
  //   Axios.post("http://localhost:3001/api/admin/postNew", {
  //     name: productName,
  //     category: category,
  //     price: price,
  //     previewUrl: url,
  //     description: description,
  //   }).then(() => {
  //     alert("Succseful Insert");
  //   });
  // };

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      url: "",
      files: [],
    },
    onSubmit: (values) => {
      Axios.post("http://localhost:3001/api/admin/postNew", {
        name: formik.values.productName,
        category: formik.values.category,
        brand: formik.values.brand,
        price: formik.values.price,
        previewUrl: formik.values.url,
        description: formik.values.description,
      });
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="productName"
          name="productName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.productName}
          label="Product Name"
        />

        <TextField
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
          label="Description"
        />

        <TextField
          id="brand"
          name="brand"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.brand}
          label="Brand"
        />
        <TextField
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.category}
          label="Category"
        />

        <TextField
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
          label="Price"
        />

        <TextField
          id="url"
          name="url"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.url}
          label="Preview Url"
        />

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
