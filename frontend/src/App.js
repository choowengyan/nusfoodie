
import './App.css';
import Navbar from './containers/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch } from '@material-ui/core';

import Establishments from './containers/Establishments/Establishments';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/establishments" component={<Establishments />} />
          {/* <Route path="/login" component={Login} />
          <Route path="/canteens" component={Canteens} />
          <Route path="/faq" component={Faq} /> */}
        </Routes>
      </Router>
      <h1>
        Hello React
      </h1>
    </div>
  );
}

export default App;
