import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import Main from "./layout/main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
