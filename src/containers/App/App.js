import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.module.css';
import Layout from '../../hoc/Layout/Layout';
import Image from '../Image/Image';
import Thumbnails from '../Thumbnails/Thumbnails';

const App = props => {
  return (
      <div className={classes.App}>
        <Layout>
          <Switch>
              <Route path="/image/:id" exact={true} component={Image}/>
              <Route path="/" exact={true} component={Thumbnails}></Route>
          </Switch>
        </Layout>
      </div>
  );
}

export default App;
