import { Button } from "@mui/material";
import React from "react";

const BuyProduct = (props) => {
  return (
    <Button size="small" variant="contained" onClick={props.onClick}>
      {props.value}
    </Button>
  );
};

export default BuyProduct;