
import './App.css';
import Navbar from './containers/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Establishments from './containers/Establishments/Establishments';
import { createTheme, ThemeProvider } from '@mui/material';
import Cuisines from './containers/Cuisines/Cuisines';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          {/* <Navbar /> */}
          <Routes>
            <Route path="/establishments" element={<Establishments />} />
            <Route path="/cuisines" element={<Cuisines />} />
            {/* <Route path="/login" component={Login} />
          <Route path="/canteens" component={Canteens} />
          <Route path="/faq" component={Faq} /> */}
          </Routes>
        </Router>
        {/* <h1>
        Hello React test
      </h1> */}
      </div>
    </ThemeProvider>

  );
}

export default App;
