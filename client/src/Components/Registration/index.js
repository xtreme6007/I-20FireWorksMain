import React from "react";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { useFormik } from "formik";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

Axios.defaults.withCredentials = true

export default function Registration() {

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [open, setOpen] = useState(false);

// Defining alert for Snack Bar
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
// Function to handle closing of Snack Bar Notification
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
 
// Defining inital formik Values
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
      // Api Call to register user
      Axios.post("/api/register", {
        user_name: formik.values.user_name,
        email: formik.values.email,
        first_name: formik.values.first_name,
        last_name: formik.values.last_name,
        password: formik.values.password,
        role: formik.values.role,
      }).then((res) => {
        setOpen(true)
        if(res.data.message !== "User Does Not exist" && res.data.message !== "Wrong Username or Password" ) {
          setRegisterSuccess(true)
          window.location.replace("/");
        }
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

      {open === true ? (
          registerSuccess === true ?
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
