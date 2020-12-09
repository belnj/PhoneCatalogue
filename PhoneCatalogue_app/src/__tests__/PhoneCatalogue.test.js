//Test PhoneCatalogue is working
import React from 'react';
import ReactDOM from 'react-dom';
import PhoneCatalogue from '../components/Phones/PhoneList/PhoneCatalogue';

it('renders PhoneCatalogue without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhoneCatalogue />, div);
});