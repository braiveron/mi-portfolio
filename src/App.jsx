import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import ThemeProvider from "./Components/Theme/Themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
