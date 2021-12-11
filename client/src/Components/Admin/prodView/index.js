import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import PrimarySearchAppBar from "../../../Components/SearchMenu";
// Defining Columns for Table
const columns = [
  { id: "id", label: "I.D.", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "brand", label: "Brand", minWidth: 100 },
  {
    id: "category",
    label: "Category",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "preview",
    label: "Preview",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "totalPrice",
    label: "Case Price",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Price_Per_Unit",
    label: "Price Per Unit (what we charge)",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "units_per_pack",
    label: "How Many Units In Package",
    minWidth: 170,
    align: "right",
    // format: (value) => value,
  },

  //   {
  //     id: 'descritption',
  //     label: 'Description',
  //     minWidth: 170,
  //     align: 'right',
  //     format: (value) => value.toLocaleString('en-US'),
  //   },
  {
    id: "profit",
    label: "Profit",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "active",
    label: "Active",
    minWidth: 170,
    align: "right",
  },
  {
    id: "unit_paid_price",
    label: "Cost Per Unit",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

// Defining Styles
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [productList, setProductList] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [query, setQuery] = useState("");
  const [queryFilter, setQueryFilter] = useState("");
  // Constant variable for rows of table
  const rows = [];

  useEffect(() => {
    // API Call to get all prducts on page load
    Axios.get("/api/getAllProducts").then((response) => {
      setProductList(response.data);
      console.log("Response", response.data);
      console.log("List", productList);
    });
  }, []);

//Function to create data for rows of table
  function createData(id,name,brand,category,preview,totalPrice,Price_Per_Unit, units_per_pack, profit,active,unit_paid_price) {
 
    return {id,name,brand,category,preview,totalPrice,Price_Per_Unit, units_per_pack, profit,active,unit_paid_price};
  }

// For loop to loop ove product list array and push data to rows constant
for (var i = 0; i < productList.length ; i++){

  if (
    (brandFilter.includes(productList[i].brand) || brandFilter.length === 0) &&
    (categoryFilter.includes(productList[i].category) || categoryFilter.length === 0) && (productList[i].name.includes(query) || productList[i].brand.includes(query) || queryFilter == productList[i].category || queryFilter == '')
  ) {
  rows.push(createData(productList[i].id,productList[i].name,productList[i].brand,productList[i].category,productList[i].preview_link,productList[i].price,productList[i].unit_price, productList[i].units, productList[i].profit,productList[i].active,productList[i].unit_paid))
  }
}

// Function Used to filter by Brand
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
// Function Used to fitler by category
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
// Function Used to reset all filters and page
  const handleDrawer = () => {
    setBrandFilter([]);
    setCategoryFilter([]);
    setPage(0)
  };
  // Function used to set query for search bar
  const handleSearchChange = (q) => {
    setQuery(q);
  };
  //Function used to reset
  const handleSearchSubmit = () => {
    handleDrawer();
    setQueryFilter(query);
  };
// Function used for Changing Pages
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
// Function used to change rows based on current page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <PrimarySearchAppBar
        onFilter={onFilterBrand}
        brandFilter={brandFilter}
        categoryFilter={onFilterCategory}
        drawerHandle={handleDrawer}
        query={handleSearchChange}
        searchSubmit={handleSearchSubmit}
      />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
