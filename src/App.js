import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TreinoDia from "./pages/TreinoDia";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treino/:dia" element={<TreinoDia />} />
      </Routes>
    </Router>
  );
}

export default App;
