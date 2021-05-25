import { BrowserRouter, Switch } from "react-router-dom";
import "./Assets/scss/style.scss";
import Header from "./Components/Header";
import Test from "./Components/Test";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        {/* <Test></Test> */}
        <Switch>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
