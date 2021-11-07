import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../src/pages/Home';

import './styles/styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,

  document.getElementById('root'),
);
