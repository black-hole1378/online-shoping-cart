import Container from "./components/Container";
import {ThemeProvider} from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./components/styled/Global";
const theme = {
   color: {
      header: "blue",
      footer: "blue",
      tittle_color: "green",
   }
}

function App() {
  return (
      <ThemeProvider theme={theme}>
          <>
           <GlobalStyle/>
             <Container/>
          </>
      </ThemeProvider>
  );
}

export default App;
