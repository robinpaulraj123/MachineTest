import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test1 />} />
          <Route path="test2" element={<Test2 />} />
          <Route path="test3" element={<Test3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
