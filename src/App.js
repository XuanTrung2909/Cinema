import { BrowserRouter, Switch } from "react-router-dom";
import "./Assets/scss/style.scss";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        
        <Switch>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
