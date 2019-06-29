import React, { Component, Fragment } from 'react';

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <SmurfForm />
        <SmurfList />
      </Fragment>
    );
  }
}

export default App;
