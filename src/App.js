// import logo from "./logo.svg";
import Header from "./components/header.jsx";
import ContactPage from "./components/contact.jsx";
import AccountPage from "./components/account.jsx";
import HomePage from "./components/home.jsx";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/contact" component={ContactPage} />
        <Route path="/account" component={AccountPage} />
      </Switch>
    </div>
  );
}

export default App;
