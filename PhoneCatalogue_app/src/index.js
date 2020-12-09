import React from 'react';
import ReactDOM from 'react-dom';

//Theme from material-ui
import {ThemeProvider} from '@material-ui/core/styles'

//Main Component
import App from './components/App'

// Import Global style configuration
import theme from './themeConfig.js' 


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/*Global style configuration*/}
        <App /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);