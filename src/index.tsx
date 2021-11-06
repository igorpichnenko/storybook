import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Home } from '../src/pages/Home';

import './styles/styles.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Home />
  </Router>,
  document.getElementById('root'),
);
