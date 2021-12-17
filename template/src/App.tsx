import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}

export default App
