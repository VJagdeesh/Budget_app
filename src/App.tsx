import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Tabs/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsmobile from "./aws-exports.js";
// import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import Header from "./components/Header/Header.js";

Amplify.configure(awsmobile);

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
    <Authenticator>
      {({ signOut }) => (
          <ThemeProvider theme={theme}>
          <ChakraProvider>
          <div className="app">
            <Header signOut={signOut}/>
            <div className="tab">
            <Home />
            </div>
          </div>
          </ChakraProvider>
          </ThemeProvider>
      )}
    </Authenticator>
    </>
  );
}

export default App;
