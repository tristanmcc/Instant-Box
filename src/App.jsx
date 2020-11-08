//React
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState, useEffect} from "react";

/// Components
import Packages from './components/template/Packages';
import Search from './components/template/SearchPage';
import PackagePage from './components/template/PackageDetails';
import Home from './components/template/HomePage';

import data from './db.json';

function App() {

/*   useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]); */
  
  /* const fetchItems = async () => {
  const data = await fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840");
  const items = await data.json();
  setItems(items);
} */

const items = data;

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Packages" render={() => <Packages items={items} />}
            items={items}/>
      <Route path="/Search" component={Search}/>
      <Route path="/Package/:packageId" render={() => <PackagePage items={items} />}
            items ={items}/>
      </Switch>
     </div>
    </Router> 
  );
}


export default App;
