import react, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useScript } from "./hooks/useScript.js";
import Mainpage from "./pages/Mainpage";

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
      <Mainpage />
    </react.Fragment>
  );
};

export default App;
