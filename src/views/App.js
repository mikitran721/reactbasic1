import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent.js";
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
        <p>Hello world with ReactJS (MikiTran)</p>
        <MyComponent />
      </header>
    </div>
  );
};

export default App;
