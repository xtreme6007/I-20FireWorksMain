import Axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Table from 'react-bootstrap/Table'




export default function ProdView() {
    const [productList, setProductList] = useState([]);

useEffect(() => {
    Axios.get("/api/getProducts").then((response) => {
        setProductList(response.data);
        console.log("Response",response.data)
        console.log("List", productList)
      });
    }, []);




    return(
        <>
        <Table responsive>
  <thead>
    <tr>
      <th>I.D.</th>
     <th>Name</th>
     <th>Brand</th>
     <th>Category</th>
     <th>Preview Link</th>
     <th>Total Price</th>
     <th>Price Per Unit</th>
     <th>Description</th>
     <th>Profit</th>
     <th>Units per pack</th>
     <th>Active</th>
    </tr>
  </thead>
  <tbody>
    { productList.map((item) => {
        return (
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.category}</td>
        <td>{item.preview_link}</td>
        <td>{item.price}</td>
        <td>{item.unit_price}</td>
        <td>{item.description}</td>
        <td>{item.profit}</td>
        <td>{item.units}</td>
        <td>{item.active}</td>
       
      </tr>
        )
    })
    
}
  </tbody>
</Table>

        </>
    )


}