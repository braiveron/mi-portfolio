import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
