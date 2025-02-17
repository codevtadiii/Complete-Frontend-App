import Navbar from "./Navbar";
import "./App.css";
import GetPost from "./get_post";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SendPost from "./Send_post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetPost />} />
          
        </Routes>
        <Routes>
          <Route path="/send" element={<SendPost />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;