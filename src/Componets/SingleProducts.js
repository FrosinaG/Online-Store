import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";

const SingleProducts = ({ article }) => {
  let { id } = useParams();

  const [product, SetProduct] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((data) => {
        SetProduct(data.data);
      })
      .catch(() => {
        console.log("exception");
      });
  }, [id]);

  if (!product) return null;
  return (
    <div key={product.id} className="single-con">
      <div className="singlebox">
        {" "}
        <div className="text part">
          <Typography variant="h3">{product.name}</Typography>

          <Typography variant="body2">
            <b>Description :</b> {product.description}
          </Typography>

          <IconButton>
            <StarBorderIcon size="small" />
          </IconButton>
          <IconButton>
            <StarBorderIcon size="small" />
          </IconButton>
          <IconButton>
            <StarBorderIcon size="small" />
          </IconButton>
          <IconButton>
            <StarBorderIcon size="small" />
          </IconButton>
          <IconButton>
            <StarBorderIcon size="small" />
          </IconButton>
          <Typography variant="body2">
            <b> {product.rating}</b>{" "}
          </Typography>
        </div>
        <div className="part-img">
          {" "}
          <img
            src={product.images}
            className="card-img-top productsimg singT"
            alt="products"
          />
        </div>
      </div>
      <div className="btnSingleProduct">
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SettingsBackupRestoreIcon />}>
            {" "}
            <Link to={"/shop"} className="link-btn">
              Back
            </Link>{" "}
          </Button>
          <Button
            variant="contained"
            startIcon={<KeyboardDoubleArrowLeftIcon />}
          >
            {" "}
            <Link
              to={`/singelproduct/${parseInt(id) - 1}`}
              className="link-btn"
            >
              Preview
            </Link>
          </Button>
          <Button
            variant="contained"
            endIcon={<KeyboardDoubleArrowRightIcon />}
          >
            {" "}
            <Link
              to={`/singelproduct/${parseInt(id) + 1}`}
              className="link-btn"
            >
              {" "}
              Next
            </Link>{" "}
          </Button>
        </Stack>
      </div>{" "}
    </div>
  );
};

export default SingleProducts;
