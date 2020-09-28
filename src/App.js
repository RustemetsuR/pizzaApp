import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/UI/Layout/Layout';
import AddNewPizza from './containers/AddNewPizza/AddNewPizza';
import EditPizza from './containers/EditPizza/EditPizza';
import Orders from './containers/Orders/Orders';
import PizzasList from './containers/PizzasList/PizzasList';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={PizzasList}/>
          <Route path='/addNewPizza' component={AddNewPizza}/>
          <Route path='/edit' component={EditPizza}/>
          <Route path='/orders' component={Orders}/>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
