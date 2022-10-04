// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import { GlobalStyle } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// import CardTailwind from "./components/card/CardTailwind";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },

// import { useState } from "react";
import Dropdown from "./components/dropdown/Dropdown";
// import HackerNewsWithHook from "./components/news/HackerNewsWithHook";

// };
function App() {
  // const [show, setShow] = useState(false);
  return (
    // <ThemeProvider theme={theme}>
    // </ThemeProvider>
    // <GlobalStyle />
    // <CardList>
    //     <CardTailwind></CardTailwind>
    //   </CardList>
    <div className="p-5">
      {/* <button onClick={() => setShow(!show)}>Toggle Button</button>
      {show && <HackerNewsWithHook></HackerNewsWithHook>} */}
      <Dropdown></Dropdown>
    </div>
  );
}

export default App;
