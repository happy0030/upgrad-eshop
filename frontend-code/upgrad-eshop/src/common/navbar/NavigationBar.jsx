import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Grid } from "@mui/material";
import SearchInput from "../../components/search/Search";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import React from "react";

//MUI Components
import LoggedIn from "../material-ui-components/buttons/LoggedIn";
import Logout from "../material-ui-components/buttons/Logout";
import ShoppingCart from "../material-ui-components/icons/ShoppingCart";

function NavigationBar(props) {
  const { isLogged, isAdmin, searchTerm, onSearchChange } = props;
  const { setToken, setUserId, setIsAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    setUserId(null);
    setIsAdmin(false);
    navigate("/login");
  };

  return (
    <AppBar position="static" className="app-primary-color">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <ShoppingCart
              onClick={() => navigate(isLogged ? "/products" : "/login")}
            />
          </Grid>
          <Grid item xs={3}>
            <SearchInput
              searchText={searchTerm}
              onSearchChange={onSearchChange}
            />
          </Grid>
          <Grid item xs={4} textAlign={"right"} justifyContent="flex-end">
            {isLogged ? (
              isAdmin ? (
                <div>
                  <LoggedIn
                    onClick={() => navigate(isLogged ? "/products" : "/login")}
                    value="Home"
                  />
                  <LoggedIn
                    onClick={() => navigate("/add-product")}
                    value="Add Product"
                  />
                  <Logout
                    onClick={handleLogout}
                    value="Logout"
                  />
                </div>
              ) : (
                <div>
                  <LoggedIn
                    onClick={() => navigate(isLogged ? "/products" : "/login")}
                    value="Home"
                  />
                  <Logout
                    onClick={handleLogout}
                    value="Logout"
                  />
                </div>
              )
            ) : (
              <div>
                <LoggedIn
                  onClick={() => navigate("/login")}
                  value="Login"
                />
                <LoggedIn
                  onClick={() => navigate("/signup")}
                  value="Sign Up"
                />
              </div>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;