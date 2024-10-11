import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Dashboard from "./pages/Dashboard/dashboard";
import VNavbar from "./components/navbar/navbar";
import "./App.css";
import { useState } from "react";
import { MyContext } from "./MyContext";
import { Provider } from "react-redux";
import store from "./store";
import Item from "./pages/Items/Item";
import Customers from "./pages/Customers/Customers";
import Order from "./pages/order/order";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const theme = createTheme({
    palette: {
      mode: "light",
      typography: {
        fontFamily: 'cursive',
      primary: {
        main: "#07273d",
      },
      // primary: {
      //   main: "#fff",
      // },
    },
  }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <div className="app-container">
          <MyContext.Provider value={{ isCollapsed, setIsCollapsed }}>
            <VNavbar />
          </MyContext.Provider>
          <div className="main-content">
            <MyContext.Provider value={{ isCollapsed, setIsCollapsed }}>
              <Routes>
                <Route path="/dashBoard" element={<Dashboard />} />
                <Route path="/items" element={<Item />} />
                <Route path="/customer" element={<Customers/>}/>
                <Route path="/order" element={<Order></Order>} />





                <p>hsggkkhdhghsgksfghhglhjghfdglhsjkfhhgjdhjhdauriutyrthgcvnbmnbhfghlsfj</p>
           </Routes>
            </MyContext.Provider>
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
