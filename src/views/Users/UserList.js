import React from "react";
import axios from "axios";
import "./UserList.scss";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listUsers: [] };
  }

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2"); //lay data tu api mat time nen sd async-await se toi uu hon
    setTimeout(() => {
      this.setState({
        listUsers: res && res.data && res.data.data ? res.data.data : [],
      });
    }, 1000);
  }

  render() {
    let { listUsers } = this.state;
    return (
      <>
        <div className="list-user-container">
          <div className="title">
            <h2>Fetch all user list</h2>
          </div>
          <div className="list-user-content">
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <>
                    <div className="child" key={item.id}>
                      {index + 1} - {item.first_name} - {item.last_name}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default UserList;
