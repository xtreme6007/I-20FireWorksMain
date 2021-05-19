import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import CustomCard from "../../Components/Card";
import Container from "@material-ui/core/Container";
import CardGroup from "react-bootstrap/CardGroup";
import PrimarySearchAppBar from "../../Components/SearchMenu";
import shallowCompare from 'react-addons-shallow-compare';

export default function SearchPage() {
  const [productList, setProductList] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [checked, setChecked] = useState({});
  const [query, setQuery] = useState("")
  const [queryFilter, setQueryFilter] = useState("")
  const [logedInStatus, setLogedInStatus] = useState([])



  useEffect(() => {
    Axios.get("/api/login").then((response)=> {
      if(response.data.LoggedIn == true){
          setLogedInStatus(response.data.User[0].user_name)
      }
  })

    Axios.get("/api/getProducts").then((response) => {
      setProductList(response.data);
    });
  }, [brandFilter, categoryFilter]);

  const onFilterBrand = (brand) => {
    if (brandFilter.includes(brand)) {
      const newList = brandFilter
        .filter((name) => name != brand)
        .map((val) => {
          return val;
        });
      setBrandFilter(newList);
    } else {
      setBrandFilter([...brandFilter, brand]);
    }
  };

  const onFilterCategory = (category) => {
    if (categoryFilter.includes(category)) {
      const newList = categoryFilter
        .filter((name) => name != category)
        .map((val) => {
          return val;
        });
      setCategoryFilter(newList);
    } else {
      setCategoryFilter([...categoryFilter, category]);
    }
  };

  const handleDrawer = () => {
    setBrandFilter([]);
    setCategoryFilter([]);
  };
  const handleSearchChange = (q) => {
        setQuery(q)
  }
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
              (categoryFilter.includes(val.category) || categoryFilter.length === 0) && (val.name.includes(query) || val.brand.includes(query) || queryFilter == val.category || queryFilter == '')
            ) {
              return (
                <CustomCard
                  name={val.name}
                  preview_link={val.preview_link}
                  description={val.description && val.description}
                  price={val.unit_price && val.unit_price}
                  brand={val.brand}
                  category={val.category}
                />
              );
            }
          })}
        </CardGroup>
      </Container>
    </>
  );
}
