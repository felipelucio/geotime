import React from 'react';
import { render } from 'react-dom';

import App from './app';
import data from './data';

render(
  <App data={data} />,
  document.getElementById('app')
);