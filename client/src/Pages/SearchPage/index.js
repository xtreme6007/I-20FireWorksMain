import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import CustomCard from "../../Components/Card";
import Container from "@material-ui/core/Container";
import CardGroup from "react-bootstrap/CardGroup";
import PrimarySearchAppBar from "../../Components/SearchMenu";
import shallowCompare from 'react-addons-shallow-compare';
import Pagination from 'react-bootstrap/Pagination'

export default function SearchPage() {
  const [productList, setProductList] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [query, setQuery] = useState("")
  const [queryFilter, setQueryFilter] = useState("")
  const [logedInStatus, setLogedInStatus] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [prodPerPage, setProdPerPage] = useState(10)
  const [indexOfFirstProd, setIndexOfFirstProd] = useState()
  const [indexOfLastProd, setIndexOfLastProd] = useState()
  let active = 1;
let items = [];
  


// Check if user is loged in (non logged in users can still view products) and get all prodcuts on page load
  useEffect(() => {
    Axios.get("/api/login").then((response)=> {
      if(response.data.LoggedIn === true){
          setLogedInStatus(response.data.User[0].user_name)
      }
  })

    Axios.get("/api/getProducts").then((response) => {
      setProductList(response.data);
    });
   
  }, [brandFilter, categoryFilter]);


  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
// Used to filter results by Brand
  const onFilterBrand = (brand) => {
    if (brandFilter.includes(brand)) {
      const newList = brandFilter
        .filter((name) => name !== brand)
        .map((val) => {
          return val;
        });
      setBrandFilter(newList);
    } else {
      setBrandFilter([...brandFilter, brand]);
    }
  };
// Used to filter results by Category
  const onFilterCategory = (category) => {
    if (categoryFilter.includes(category)) {
      const newList = categoryFilter
        .filter((name) => name !== category)
        .map((val) => {
          return val;
        });
      setCategoryFilter(newList);
    } else {
      setCategoryFilter([...categoryFilter, category]);
    }
  };
// Used to set all filters to empty
  const handleDrawer = () => {
    setBrandFilter([]);
    setCategoryFilter([]);
  };
  // Used when search box value changes
  const handleSearchChange = (q) => {
        setQuery(q)
  }
  //Used when User submits a search
  const handleSearchSubmit = () => {
      setBrandFilter([])
      setCategoryFilter([])
      setQueryFilter(query)

  }



  return (
    <>
      <Container maxWidth="md">
        <PrimarySearchAppBar
          onFilter={onFilterBrand}
          brandFilter={brandFilter}
          categoryFilter={onFilterCategory}
          drawerHandle={handleDrawer}
          query={handleSearchChange}
          searchSubmit={handleSearchSubmit}

        />
        <CardGroup>
          {productList.map((val) => {
            if (
              (brandFilter.includes(val.brand) || brandFilter.length === 0) &&
              (categoryFilter.includes(val.category) || categoryFilter.length === 0) && (val.name.includes(query) || val.brand.includes(query) || queryFilter === val.category || queryFilter === '')
            ) {
              return (
                <CustomCard
                  name={val.name}
                  preview_link={val.preview_link && val.preview_link}
                  description={val.description && val.description}
                  price={val.price && val.price}
                  brand={val.brand}
                  category={val.category}
                />
              );
            } 
            return;
          })}
        </CardGroup>
       
      </Container>
      <div>
   

    <Pagination size="md" onClick ={(e) => {
      let number = parseInt(e.target.firstChild);
      console.log(number)
    
    }}>{items}</Pagination>
        </div>
    </>
  );
}
