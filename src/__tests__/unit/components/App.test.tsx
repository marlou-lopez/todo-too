import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../../../app/App';
import { RootState } from '../../../app/redux/reducers';


describe('App component unit test', () => {
  const mockStore = configureMockStore();

  it('renders without crashing', () => {
    const initialState: RootState = {
      todos: {
        todos: []
      }
    }
    const store = mockStore(initialState)
    const root = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
  , root)
  })
})