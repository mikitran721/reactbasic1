import React from "react";
import Color from "../HOC/Color";

class About extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <p> This basic web was made by MikiTran.</p>
      </>
    );
  }
}
export default Color(About);
