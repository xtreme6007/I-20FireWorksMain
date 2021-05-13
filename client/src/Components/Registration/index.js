import React from "react";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { useFormik } from "formik";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

Axios.defaults.withCredentials = true

export default function Registration() {
 

  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      role: "Customer"
    },
    onSubmit: (values) => {
      Axios.post("/api/register", {
        user_name: formik.values.user_name,
        email: formik.values.email,
        first_name: formik.values.first_name,
        last_name: formik.values.last_name,
        password: formik.values.password,
        role: formik.values.role,
      });
    },
  });

  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "green",
        borderRadius: "80px",
        marginTop: "25px",
      }}
    >
      <h1>Upload Product Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* User Name */}
        <TextField
          id="user_name"
          name="user_name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.user_name}
          label="User Name"
        />
        <br />
        {/* Email  */}
        <TextField
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="Email"
        />
        <br />
        {/* First Name */}
        <TextField
          id="first_name"
          name="first_name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.irst_name}
          label="First Name"
        />
        <br />
        {/* Last Name */}
        <TextField
          id="last_name"
          name="last_name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.last_name}
          label="Last Name"
        />
        <br />
        {/* Password */}
        <TextField
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          label="Password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}
