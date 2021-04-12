import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import { CloudinaryContext, Image } from "cloudinary-react";



export default function SearchMenu() {
    const [productList, setProductList] = useState([]);
    const [objectURL, setObjectURL] = useState('');
    // let base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
    
    useEffect(() => {
          Axios.get("http://localhost:3001/api/getProducts").then((response) => {
            console.log(response.data);
            setProductList(response.data);
          });
        },[]);

        

    return(
        <>

<div>
      {productList.map((val) => {
        return (
            <>
         <CloudinaryContext cloudName="prestonscloud">
<h1>{val.name}</h1>
<Image publicId={val.name} style={{height : "100px", width: "100px"}}/>

</CloudinaryContext>
            </>
        )
      })}
      
      
   </div>        
        </>



    )



}