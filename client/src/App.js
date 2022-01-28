import './App.css';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Main from './components/Main';
import New from './components/New';
import ShowOne from './components/ShowOne';

function App() {
  return (
    <div className="App">
      <h1>Products 🏪</h1>
      <p><Link to="/">Home</Link> | <Link to="/products/new">Create</Link> </p>

      <hr />

      <Switch>
        {/* CREATE */}
      <Route exact path="/products/new">
          <New />
        </Route>
        {/* SHOW ONE */}
        <Route path="/products/:id">
          <ShowOne />
        </Route>
        {/* HOME */}
        <Route path="/products">
          <Main />
        </Route>

        <Route path="/">
          <Redirect to="/products" />
        </Route>


      </Switch>

    </div>
  );
}

export default App;
