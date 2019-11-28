import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Provider from 'react-redux/es/components/Provider';
import store from './redux/store';
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
        <Provider store={store}>
          <Page>
            <Switch>
              <Route exact strict path="/" component={Home} />
              <Route exact strict path="/about" component={About} />
            </Switch>
          </Page>
        </Provider>
      </Router>
    );
  }
}
export default App;
