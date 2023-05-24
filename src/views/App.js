import logo from "./logo.svg";
import "./App.scss";
// import "./Todos/ListTodos.scss";
// import MyComponent from "./example/MyComponent.js";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**
 * 2 component: class compt & function comp
 */
const App = () => {
  // function App() {
  // JSX - ma
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple Todo Apps with ReactJS (MikiTran &amp; Chignugg)</p>
        {/* <MyComponent /> */}
        <ListTodo />
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
