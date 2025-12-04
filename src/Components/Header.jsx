import React from "react";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <>
      <Container>
        <div className="text-center py-3">
          <h1>Todo Manager</h1>
          <h5>Organize your tasks efficiently</h5>
        </div>
      </Container>
    </>
  );
};

export default Header;
