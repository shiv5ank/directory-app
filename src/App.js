import "./App.css";
import "./index.css";
import Header from "./components/Header.js";
import Button from "./components/Button.js";
import { Routes, Route } from "react-router-dom";
import RefreshMainInfo from "./pages/RefreshMainInfo.js";
import AddNew from "./pages/AddNew.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
      <Routes>
        <Route path="/" element={<AddNew />} />
        <Route path="/refresh" element={<RefreshMainInfo />} />
      </Routes>
    </div>
  );
}

export default App;
