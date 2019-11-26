import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './component/layout/Page/Page';
import Home from './component/Pages/Home/Home';
import About from './component/Pages/About/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <Router history={this.history}>
          <Page>
            <Switch>
              <Route exact strict path="/" component={Home} />
              <Route exact strict path="/about" component={About} />
            </Switch>
          </Page>
      </Router>
    );
  }
}
export default App;
