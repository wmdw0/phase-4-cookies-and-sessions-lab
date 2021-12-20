import { Switch, Route } from "react-router-dom";
import Article from "./Article";
import Header from "./Header";
import Home from "./Home";
import Paywall from "./Paywall";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/articles/:id">
          <Article />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/paywall">
          <Paywall />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
