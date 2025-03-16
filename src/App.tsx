import './App.css'
import {Route, Routes} from "react-router-dom";
import BlockDetails from "./components/BlockDetails.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/block/:hash" element={<BlockDetails />} />
      </Routes>
    </>
  )
}

export default App
