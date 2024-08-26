import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="app">
      <h1>Welcome to budget tracking app</h1>
      <ChakraProvider>
        <div className="tab">
        <Home />
        </div>
      </ChakraProvider>
      </div>
    </>
  );
}

export default App;
