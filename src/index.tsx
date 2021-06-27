import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import { store } from './app/redux/store';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />   
  </Provider>
  , root);