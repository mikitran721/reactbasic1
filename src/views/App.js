import logo from "./logo.svg";
import "./App.scss";
// import "./Todos/ListTodos.scss";
import MyComponent from "./example/MyComponent.js";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./example/Home";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import About from "./example/About";
import UserList from "./Users/UserList";

/**
 * 2 component: class compt & function comp
 */

// const router = createBrowserRouter([
//   <Nav />,
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/todo",
//     element: <ListTodo />,
//   },
//   {
//     path: "/works",
//     element: <MyComponent />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

const App = () => {
  // function App() {
  // JSX - ma
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/todo/*" element={<ListTodo />} />
          <Route path="/works/*" element={<MyComponent />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/user/*" element={<UserList />} />
        </Routes>
        {/* <RouterProvider router={router} /> */}

        {/* <Home /> */}
        {/* <MyComponent /> */}
        {/* <ListTodo /> */}
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
