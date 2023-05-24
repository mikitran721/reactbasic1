import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
  state = { showJobs: false };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    console.log(`>>data clickdelete: `, job);
    this.props.deleteAJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    // let check = showJobs === true ? "showJobs=true" : "showJobs=false";
    return (
      // <div className="miki">
      // <React.Fragment> --> using fragment <></>
      <>
        {showJobs === false ? (
          <div>
            <button
              className="btn-show"
              onClick={() => {
                this.handleShowHide();
              }}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}&nbsp;&nbsp;
                    <pan onClick={() => this.handleOnClickDelete(item)}>x</pan>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                style={{ color: "red" }}
                onClick={() => {
                  this.handleShowHide();
                }}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

//function component

// const ChildComponent = (props) => {
//   let { arrJobs } = props;
//   return (
//     // <div className="miki">
//     // <React.Fragment> --> using fragment <></>
//     <>
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 5000) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary} $
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
//   // return <div>Hello arrow function</div>;
// };

export default ChildComponent;
