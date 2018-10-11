import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Aux from './containers/Aux/Aux';
import Layout from './containers/Layout/Layout';
import Movies from './components/Movies/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aux>
          <Layout>
            <Switch>
              <Route path="/" exact render={(props) => <Movies {...props} content="now_playing" key="now_playing" />} />
              <Route path="/upcoming" render={(props) => <Movies {...props} content="upcoming" key="upcoming" />} /> 
            </Switch>
          </Layout>
        </Aux>
      </div>
    );
  }
}

export default App;
