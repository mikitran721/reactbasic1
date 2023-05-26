import React from "react";
import withRouter from "./WithRouter";

class Home extends React.Component {
  componentDidMount() {
    // cho code delay 3s
    setTimeout(() => {
      console.log(`>>check timeout`);
      this.props.navigate("/todo");
    }, 3000);
  }

  render() {
    console.log(`>>check props: `, this.props);
    return (
      <>
        <div>Hello world from Homepage</div>
      </>
    );
  }
}
export default withRouter(Home);
