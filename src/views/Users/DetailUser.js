import React, { Component } from "react";
import withRouter from "../example/WithRouter";
import axios from "axios";

class DetailUser extends Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.params) {
      let id = this.props.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
      console.log(`>>>check response: `, res);
    }
  }

  handeBackButton = () => {
    this.props.navigate(`/user`);
  };
  render() {
    let { user } = this.state;
    // check empty object
    let isEmptyObj = Object.keys(user).length === 0;
    console.log(`>>check props: `, this.props);
    return (
      <>
        <div>Hello world from user detail with id: {this.props.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div>
              User's name: {user.first_name} - {user.last_name}
            </div>
            <div>User's email: {user.email}</div>
            <div>
              <img src={user.avatar} alt="user img" />
            </div>
            <div>
              <button onClick={() => this.handeBackButton()}>Back</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
