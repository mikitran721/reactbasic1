import React from "react";

class MyComponent extends React.Component {
  //
  state = {
    //la 1 object
    name: "Miki Tran TNC",
    channel: "Chignugg",
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleClickButton = () => {
    alert(`Click me button`);
  };
  render() {
    console.log(`>>>kiem tra state now: `, this.state);
    return (
      // <div className="miki">
      // <React.Fragment> --> using fragment <></>
      <>
        <div className="first">
          Hello this is my component, - State Variable:
          {this.state.name} <hr />
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
        </div>
        <div className="second">khoi div 2, {this.state.channel}</div>
        {/* </React.Fragment> */}
        {/* // </div> */}
        <div className="third">
          <button
            onClick={() => {
              this.handleClickButton();
            }}
          >
            Click me
          </button>
        </div>
      </>
    );
  }
}

export default MyComponent;
