import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Login } from './pages/Login/index'
import { Home } from './pages/Home/index'


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
