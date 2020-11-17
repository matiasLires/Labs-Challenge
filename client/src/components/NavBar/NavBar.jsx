import React from "react";

import SearchBar from "../SearchBar/SearchBar";

import { Navbar } from "react-bootstrap";

export default function NavBar({ onSearch }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Navbar.Brand className="mr-auto" href="#home">
          Labs Challenge
        </Navbar.Brand>
        {/*         <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
        <SearchBar onSearch={onSearch} />
      </Navbar>
    </div>
  );
}
