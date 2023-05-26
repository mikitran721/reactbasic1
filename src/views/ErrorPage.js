import React from "react";

// class ErrorPage extends React.Component {
//   render() {
//     const error = useRouteError();
//     console.error(error);

//     return (
//       <>
//         <div id="error-page">
//           <h1>Oops!</h1>
//           <p>Sorry, an unexpected error has occurred.</p>
//           <p>
//             <i>{error.statusText || error.message}</i>
//           </p>
//         </div>
//       </>
//     );
//   }
// }
// export default ErrorPage;
export default function ErrorPage() {
  // const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
