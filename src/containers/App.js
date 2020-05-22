import React, { useState } from 'react';
import classes from './App.module.css';
import Layout from '../hoc/Layout/Layout';
import Cover from '../components/Cover/Cover';

const App = props => {
  return (
      <div className={classes.App}>
        <Layout>
          <Cover />
        </Layout>
      </div>
  );
}

export default App;
