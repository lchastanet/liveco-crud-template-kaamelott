import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

import "./App.css";
import AddKnight from "./pages/AddKnight";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-knight" element={<AddKnight />} />
      </Routes>
    </div>
  );
}

export default App;
