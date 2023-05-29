import React from "react";
import withRouter from "./WithRouter";
import logo from "../../assets/images/logo-circle-photoroom.png";
import "./Demo.scss";
import Color from "../HOC/Color";
import { connect } from "react-redux"; //HOC

class Home extends React.Component {
  // componentDidMount() {
  //   // cho code delay 3s
  //   setTimeout(() => {
  //     console.log(`>>check timeout`);
  //     this.props.navigate("/todo");
  //   }, 100000);
  // }

  handleDeleteUser = (user) => {
    //
    // console.log(`>>> check user delete: `, user);
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  render() {
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello world from Homepage</div>
        <div>
          <img className="img-logo" src={logo} alt="Pic of Dog" />
        </div>
        <div>
          <h3>User list from Redux data</h3>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <>
                  <div key={item.id}>
                    {index + 1} - {item.name} &nbsp;
                    <span onClick={() => this.handleDeleteUser(item)}>x</span>
                    &nbsp;
                  </div>
                </>
              );
            })}

          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}

// Lay data tu redux-state ve react-prop
const mapStateToProps = (state) => {
  //return 1 object
  return { dataRedux: state.users };
};

// muc dich: de su dung this.props.... trong react
const mapDispatchToProps = (dispatch) => {
  //bao gio cung return 1 object
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

// export default withRouter(Home);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color(withRouter(Home))); //goi long HOC; cho react & redux ket noi chi trong comp-Home
