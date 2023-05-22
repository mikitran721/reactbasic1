import React from "react";

class ChildComponent extends React.Component {
  //
  state = {
    firstName: "",
    lastName: "",
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
    console.log(`>>>Check props: `, this.props);
    let { name, add, arrJobs } = this.props;
    return (
      // <div className="miki">
      // <React.Fragment> --> using fragment <></>
      <>
        <div>
          Child Component: {name} - {add}
        </div>
        <div className="job-lists">
          {arrJobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ChildComponent;
