import { Main } from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import { initTheme, ThemeContext } from "./shared/theme";

function App() {

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={initTheme}>
        <Main />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
