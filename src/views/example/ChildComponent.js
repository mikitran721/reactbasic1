import React from "react";

// class ChildComponent extends React.Component {
//   render() {
//     console.log(`>>>Check props: `, this.props);
//     let { name, add, arrJobs } = this.props;
//     return (
//       // <div className="miki">
//       // <React.Fragment> --> using fragment <></>
//       <>
//         <div>
//           Child Component: {name} - {add}
//         </div>
//         <div className="job-lists">
//           {arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }
//function component

const ChildComponent = (props) => {
  let { arrJobs } = props;
  return (
    // <div className="miki">
    // <React.Fragment> --> using fragment <></>
    <>
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
  // return <div>Hello arrow function</div>;
};

export default ChildComponent;
