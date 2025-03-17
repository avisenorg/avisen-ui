import './App.css'
import {Route, Routes} from "react-router-dom";
import BlockDetails from "./pages/BlockDetails.tsx";
import Home from "./pages/Home.tsx";
import NavBar from "./components/Navbar.tsx";
import ArticleDetails from "./pages/ArticleDetails.tsx";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/block/:hash" element={<BlockDetails />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </>
  )
}

export default App
