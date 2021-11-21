import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../src/pages/Home';
import { ThemeProvider } from '@mui/material';

import './styles/styles.scss';
import { miuTheme } from './styles/muiTheme';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={miuTheme}>
      <Home />
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById('root'),
);
