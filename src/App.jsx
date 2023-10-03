import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

//Pages
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
