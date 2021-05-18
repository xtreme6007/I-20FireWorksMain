import react from "react";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import { Redirect } from "react-router-dom";

Axios.defaults.withCredentials = true;

export default function Login() {
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [open, setOpen] = useState(false);


  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <form>
        <TextField
          type="text"
          label="Username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></TextField>
        <br />
        <TextField
          type="text"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></TextField>
        <br />

        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            
            Axios.post("/api/login", {
              user_name: userName,
              password: password,
            }).then((res) => {
            setOpen(true)
            if(res.data.message !== "User Does Not exist" && res.data.message !== "Wrong Username or Password" ) {
              setLoginSuccess(true)
              window.location.replace("/");
            }
            });
          }}
          style={{ marginTop: "10%" }}
        >
          Log In
        </Button>
      </form>

      {open === true ? (
          loginSuccess === true ?
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
