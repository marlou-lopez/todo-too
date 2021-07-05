import { CssBaseline, ThemeProvider, Container } from '@material-ui/core';
import React from 'react';
import TodoContainer from './components/Todo/TodoContainer';
import theme from './theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
      <TodoContainer />
    </Container>
  </ThemeProvider>
);

export default App;
