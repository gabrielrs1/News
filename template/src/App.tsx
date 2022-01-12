import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

import Home from "./components/Home";
import News from "./components/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/new" element={ <News /> } />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}

export default App
