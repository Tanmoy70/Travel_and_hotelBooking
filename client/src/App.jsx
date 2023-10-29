import "./App.scss";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotel";
import List from "./Pages/List/List";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
