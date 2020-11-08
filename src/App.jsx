//React
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState, useEffect} from "react";

/// Components
import Home from './components/template/HomePage';
import Search from './components/template/SearchPage';
import PackagePage from './components/template/PackagePage';

function App() {

  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {
  const data = await fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840");
  const items = await data.json();
  setItems(items);
}

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact render={() => <Home items={items} />}
            items={items}/>
      <Route path="/Search" component={Search}/>
      </Switch>
      <Switch>
      <Route path="/Package" render={() => <PackagePage items={items}/>}
              items={items} />      
      </Switch>   
    </div>
    </Router> 
  );
}


export default App;
