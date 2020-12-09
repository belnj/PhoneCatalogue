//Test App is working
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});