import react, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useScript } from "./hooks/useScript.js";
import Mainpage from "./pages/Mainpage";
import Takeout from "./pages/Takeout";
import Orderlist from "./pages/Orderlist";
import Sales from "./pages/Sales";
import Staff from "./pages/Staff";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App = () => {
  const status = useScript("https://kit.fontawesome.com/6478f529f2.js");
  useEffect(() => {
    if (status === "ready") {
      //window.SomeThingSDK();
    }
  });
  return (
    <react.Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="" element={<Mainpage />} />
        <Route path="Takeout" element={<Takeout />} />
        <Route path="Orderlist" element={<Orderlist />} />
        <Route path="Sales" element={<Sales />} />
        <Route path="Staff" element={<Staff />} />
      </Routes>
    </react.Fragment>
  );
};

export default App;
