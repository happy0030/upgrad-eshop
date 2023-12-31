import { useContext, useState } from "react";
import { Avatar, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../common/auth/AuthContext";
import NavigationBar from "../../common/navbar/NavigationBar";
import React from "react";

//MUI Components
import LoginButton from "../../common/material-ui-components/buttons/LoginButton";
import LoginTextField from "../../common/material-ui-components/text-field/LoginTextField";

import "./Login.css";

//Toasts
import { ErrorToast } from "../../common/toasts/Toast";

function Login() {
  const navigate = useNavigate();
  const { setToken, setUserId, setIsAdmin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    const body = JSON.stringify({
      password: password,
      username: email,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (email && password) {
      await axios
        .post("http://localhost:8080/api/auth/signin", body, header)
        .then((response) => {
          const user = response.data;
          if (user != null) {
            setToken(user.token);
            //set the role to admin if the roles contain ADMIN, setAdmin using authContext
            if (user.roles[0] === "ADMIN") {
              setIsAdmin(true);
            }
            //set the userID using authContext
            setUserId(user.id);
            navigate("/products");
          }
        })
        .catch(() => {
          ErrorToast("Invalid Credentials");
        });
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="loginContainer">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Avatar className="avatarStyle">
            <LockIcon />
          </Avatar>
          <Typography gutterBottom variant="h5" component="p">
            Sign in
          </Typography>

          <LoginTextField
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            error={emailError}
          />
          <LoginTextField
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            error={passwordError}
          />

          <LoginButton value="Sign In" />
        </form>
        {/* below the signup option to signup */}
        <div className="signuplink">
          <Link to="/signup">Don't have an account? SignUp</Link>
        </div>
      </div>
      <div className="loginFooter">
        Copyright &copy; <Link href="https://www.upgrad.com/">upGrad</Link> 2023
      </div>
    </>
  );
}

export default Login;