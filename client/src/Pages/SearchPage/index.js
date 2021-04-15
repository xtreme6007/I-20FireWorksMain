import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import CustomCard from "../../Components/Card";
import Container from "@material-ui/core/Container";
import CardGroup from "react-bootstrap/CardGroup";
import PrimarySearchAppBar from "../../Components/SearchMenu";

export default function SearchPage() {
  const [productList, setProductList] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [checked, setChecked] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getProducts").then((response) => {
      console.log(response.data);
      setProductList(response.data);
      console.log("Brand Filter", brandFilter);
      console.log(categoryFilter);
    });
    // setBrandFilter(brandFilter)
  }, [brandFilter, categoryFilter]);

  const onFilterBrand = (brand) => {
    if (brandFilter.includes(brand)) {
      const newList = brandFilter
        .filter((name) => name != brand)
        .map((val) => {
          return val;
        });
      setBrandFilter(newList);
      console.log("NewList", newList);
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
      console.log("NewList", newList);
    } else {
      setCategoryFilter([...categoryFilter, category]);
    }
    console.log(categoryFilter);
  };

  const handleDrawer = () => {
    setBrandFilter([]);
    setCategoryFilter([]);
  };

  return (
    <>
      <Container maxWidth="md">
        <PrimarySearchAppBar
          onFilter={onFilterBrand}
          brandFilter={brandFilter}
          categoryFilter={onFilterCategory}
          drawerHandle={handleDrawer}
        />
        <CardGroup>
          {productList.map((val) => {
            if (
              (brandFilter.includes(val.brand) || brandFilter.length === 0) &&
              (categoryFilter.includes(val.category) ||
                categoryFilter.length === 0)
            ) {
              return (
                <CustomCard
                  name={val.name}
                  preview_link={val.preview_link}
                  description={val.description && val.description}
                  price={val.price && val.price}
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
