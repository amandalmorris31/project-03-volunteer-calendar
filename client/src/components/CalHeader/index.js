import React from "react";
import styled from "styled-components";

const Heading = styled.header`
  @media only screen and (min-width: 768px) {
    hr {
      display: none;
    }
  }

  hr {
    border-top: 2px solid var(--accent-color);
  }

  header h1 {
    color: var(--primary-color);
  }
`;

function CalHeader() {
  return (
    <Heading>
      <header className="my-4">
        <h1 className="title is-1 has-text-centered">
          Volunteer Calendar <i className="fas fa-hands-helping"></i>
        </h1>
        <hr />
      </header>
    </Heading>
  );
}

export default CalHeader;
