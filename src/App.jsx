import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ThemeProvider from "./Components/Theme/Themes";
import Animation from "./Components/Animation";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Animation />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
