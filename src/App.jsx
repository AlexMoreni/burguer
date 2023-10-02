import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
