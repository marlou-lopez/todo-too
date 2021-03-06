import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from '../reducers';
import * as actionCreators from '../action-creators';

const store = createStore(reducers, devToolsEnhancer({
  actionCreators,
}));

export default store;
