import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:id" element={<SingleUser />} />
      </Routes>
    </Router>
  );
}

export default App;