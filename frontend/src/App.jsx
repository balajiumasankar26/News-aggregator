import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";
import News from "./components/home/News";
import UpdateNews from "./components/home/UpdateNews";


const App=()=>{
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/news/:id" element={<News/>}/>
          <Route path="/news/create" element={<UpdateNews/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App;