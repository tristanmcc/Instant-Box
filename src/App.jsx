//React
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/// Components
import Home from './components/template/HomePage';
import Search from './components/template/SearchPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Search" component={Search}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
