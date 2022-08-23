import { Route, Routes } from "react-router-dom";
import "./App.css";
import BottomHeader from "./components/Header/BottomHeader";
import TopHeader from "./components/Header/TopHeader";
import Home from "./pages/Home";
import ListBooks from './pages/ListBooks';
function App() {
  return (
    <div className="container mx-auto">
      <TopHeader />
      <BottomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-all" element={<ListBooks />} />
      </Routes>
    </div>
  );
}

export default App;
