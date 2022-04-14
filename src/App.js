import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Chackout from "./components/Chackout";
import Payment from "./components/Payment";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path='/checkout/:total' >
          <Chackout />
        </Route>
        <Route path='/payment' >
          <Payment />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
