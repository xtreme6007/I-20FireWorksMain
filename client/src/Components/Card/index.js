import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { CloudinaryContext, Image } from "cloudinary-react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Cloudinary } from "cloudinary-core";

const cloudinaryCore = new Cloudinary({ cloud_name: "prestonscloud" });

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    // height: 400,
    margin: "10px",
  },
  media: {
    height: 140,
    maxWidth: 345,
  },
});

export default function CustomCard(props) {
  const [objectURL, setObjectURL] = useState("");
  const classes = useStyles();

  return (
    <>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <div>
              <CardMedia
                className={classes.media}
                image={cloudinaryCore.url(props.name)}
                title="Contemplative Reptile"
              />
            </div>

            {/* <img src={CLOUDINARY_UPLOAD_URL + '/' + val.name} /> */}
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: "center" }}
              >
                {props.name}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
                style={{
                  maxWidth: "75%",
                  color: "blue",
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  // overflow: "auto",
                }}>
                  {props.category}
                </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
                style={{
                  maxWidth: "75%",
                  color: "green",
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  // overflow: "auto",
                }}
              >
                {props.brand}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ textAlign: "center" }}
              >
                $ {props.price}/ Per Unit
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {props.preview_link ? (
              <Button size="small" color="primary" href={props.preview_link}>
                View Video
              </Button>
            ) : null}

            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
