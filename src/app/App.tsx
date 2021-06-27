import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import TodoContainer from './components/Todo/TodoContainer';
import theme from './theme';

const App: React.FC = () => {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h3 color='red'>Todo Too</h3>
        <TodoContainer />
      </div>
    </ThemeProvider>
  )
};

export default App;