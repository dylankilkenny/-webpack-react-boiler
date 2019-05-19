import ReactDOM from 'react-dom';
import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router
} from 'react-router-dom';
import withAnalytics, { initAnalytics } from 'react-with-analytics';

initAnalytics('GA_KEY');

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>Hello World!</h1>} />
  </Switch>
);

const AppWithRouter = withRouter(withAnalytics(Routes));

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <AppWithRouter />
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
