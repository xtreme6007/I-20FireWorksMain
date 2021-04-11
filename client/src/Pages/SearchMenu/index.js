import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";




export default function SearchMenu() {
    const [movieReviewList, setMovieReviewList] = useState([]);
    
    useEffect(() => {
          Axios.get("http://localhost:3001/api/get").then((response) => {
            console.log(response.data);
            setMovieReviewList(response.data);
          });
        });

    return(
        <></>



    )



}