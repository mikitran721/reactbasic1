import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  //
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "abcJob1", title: "Designer", salary: "5000 $" },
      { id: "abcJob2", title: "Freelancer", salary: "2000 $" },
      { id: "Manager", title: "Designer", salary: "1000 $" },
    ],
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //khong submit page
    console.log(`>>check state: `, this.state);
  };
  render() {
    console.log(`>>>kiem tra state now: `, this.state);
    return (
      // <div className="miki">
      // <React.Fragment> --> using fragment <></>
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>

        <ChildComponent
          name={this.state.firstName}
          add={"HCMC"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
