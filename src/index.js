import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

let style = {
  color: "rgb(255, 0, 0)",
  backgroundColor: "rgb(255, 255, 0)"
};

const Content = styled.div`
  color: rgb(255, 0, 0);
  background-color: rgb(255, 255, 0);
`;

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <div style={style}>Using style object</div>
        <Content>Using Styled Components</Content>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, rootElement);
