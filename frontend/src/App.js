import { Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import TrashPage from './pages/Trash';
import {useState} from 'react';
import ArchivePage from "./pages/Archive";
import Drawing from "./components/BodyPart/Home/Drawing";
function App() {

  const [width,SetWidth] = useState("290px");

  return (
    <Routes>
    <Route path="/" element={<HomePage width={width} SetWidth={SetWidth} />} />
    <Route path="/trash" element={<TrashPage width={width} SetWidth={SetWidth}/>} />
    <Route path="/archive" element={<ArchivePage width={width} SetWidth={SetWidth}/>} />
    <Route path="/drawing" element={<Drawing/>} />



  </Routes>
  );
}

export default App;
