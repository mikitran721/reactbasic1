import React from "react";

class MyComponent extends React.Component {
  //
  state = {
    //la 1 object
    name: "Miki Tran TNC",
    channel: "Chignugg",
  };
  render() {
    let name = "Miki Tran variable";
    return (
      // <div className="miki">
      // <React.Fragment> --> using fragment <></>
      <>
        <div className="first">
          {console.log(`>>Data inside html`, name)}
          Hello this is my component, miki tran; Name - State Variable:
          {this.state.name}
        </div>
        <div className="second">khoi div 2, {this.state.channel}</div>
        {/* </React.Fragment> */}
        {/* // </div> */}
      </>
    );
  }
}

export default MyComponent;
