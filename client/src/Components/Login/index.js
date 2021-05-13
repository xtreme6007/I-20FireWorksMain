import react from 'react';
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




Axios.defaults.withCredentials = true

export default function Login() {
    const [userName, setUserName] = useState([]);
    const [password, setPassword] = useState([]);
    


return(
<Container>
        <form>
        
        <TextField type = "text" label = "Username" onChange = {(e) => {
            setUserName(e.target.value)

        }}>
        </TextField>
        <br/>
        <TextField type = "text" label= "Password" onChange = {(e) => {
            setPassword(e.target.value)

        }}></TextField>
        <br/>

        
        <Button variant="outlined" color="primary" onClick = {() => {
             Axios.post("/api/login", {
              user_name: userName,
              password: password
              }).then((res) => {console.log(res)})
        }} 
        style ={{marginTop: "10%"}}>
  Log In
</Button>
        </form>

        </Container>
)
}