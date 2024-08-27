import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Tabs/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {

  const theme = createTheme({
    typography: {
      body2: {
        fontSize: '1rem', // Default value, adjust as needed
      },
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="app">
      <h1>Welcome to budget tracking app</h1>
      <ChakraProvider>
        <div className="tab">
        <Home />
        </div>
      </ChakraProvider>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
