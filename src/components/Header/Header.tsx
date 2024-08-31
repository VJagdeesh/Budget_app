import React from "react";
import "./Header.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
interface HeaderProps {
  signOut: any;
}

const Header: React.FC<HeaderProps> = ({ signOut }) => {
  return (
    <div className="header">
      <h1>Welcome to budget tracking app</h1>
      <Button variant="solid" colorScheme="blue" size="lg" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default Header;
