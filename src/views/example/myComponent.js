import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  //
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Designer", salary: "5000" },
      { id: "abcJob2", title: "Freelancer", salary: "2000" },
      { id: "abcJob3", title: "Manager", salary: "10000" },
    ],
  };

  addNewJob = (job) => {
    //
    console.log(`>>check data call from child to parent: `, job);
    this.setState({
      //arrJobs: this.state.arrJobs.push(job),
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  render() {
    console.log(`>>>kiem tra state now: `, this.state);
    return (
      // <div className="miki">
      // <React.Fragment> --> using fragment <></>
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
