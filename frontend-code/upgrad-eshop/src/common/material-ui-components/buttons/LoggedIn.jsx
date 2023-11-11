import { Button } from "@mui/material";

import React from "react";

const LoggedIn = (props) => {
  return (
    <Button color="inherit" variant="text" onClick={props.onClick}>
      {props.value}
    </Button>
  );
};

export default LoggedIn;