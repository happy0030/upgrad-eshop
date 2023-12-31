import { Button } from "@mui/material";

import React from "react";

const LoginButton = (props) => {
  return (
    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, width: "100%" }}>
      {props.value}
    </Button>
  );
};

export default LoginButton;