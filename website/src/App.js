import { Main } from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import { initTheme, ThemeContext } from "./shared/theme";
import { useState } from "react";

function App() {

  const [context, setContext] = useState(initTheme)

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={[context, setContext]}>
        <Main />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
