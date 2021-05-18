import React, { useEffect } from "react";
import { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [showDrawer, setShowDrawer] = React.useState(0);
  const [openDrawer, setOpen] = React.useState(true);
  const [openBrand, setOpenBrand] = React.useState(true);
  const [openCategory, setOpenCategory] = React.useState(true);
  const [state, setState] = React.useState({ left: false });
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(  () => {
     Axios.get("/api/getBrands").then((res) => {
      setBrandList(res.data);
    });

    Axios.get("/api/getCategories").then((res) => {
      setCategoryList(res.data);
    });
  },[]);

  const toggleDrawer = (anchor, openDrawer) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: openDrawer });
    if (openDrawer === true) {
      props.drawerHandle();
    }
  };

  const handleClick = () => {
    setOpenBrand(!openBrand);
  };
  // Used to render filter drawer list
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Used to display Brands in filter Drawer */}
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Brands" />
          {openBrand ? <ExpandMore /> : <ExpandLess />}
        </ListItem>

        <Collapse in={openBrand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div>
              {brandList.map((item) => (
                <li key={item.brand}>
                  {" "}
                  <input
                    type="checkbox"
                    value={item.brand}
                    onChange={() => {
                      props.onFilter(item.brand)
                    }}
                  />
                  {item.brand}
                </li>
              ))}
            </div>
          </List>
        </Collapse>
      </List>
      <Divider />
      {/* Used to display Category Types */}
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Categories" />
          {openCategory ? <ExpandMore /> : <ExpandLess />}
        </ListItem>

        <Collapse in={openBrand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div>
              {categoryList.map((item) => (
                <li key={item.category}>
                  <input
                    type="checkbox"
                    value={item.category}
                    onClick={() => props.categoryFilter(item.category)}
                  />
                  {item.category}
                </li>
              ))}
            </div>
          </List>
        </Collapse>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#FF000000",
          border: "none",
          box: "0,0,0,0",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <div>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>Filter</Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => props.query(e.target.value)}
            />


          </div>
          <Button color="primary" onClick={props.searchSubmit}>Search</Button>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
