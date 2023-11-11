import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { AuthContextProvider } from "../src/common/auth/AuthContext";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

function App() {
  return (
    <AuthContextProvider>
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </AuthContextProvider>
  );
}

export default App;
