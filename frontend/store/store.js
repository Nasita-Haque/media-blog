import {createStore} from 'redux';
import reducer from '../reducers/reducer.js';

const Store = createStore(reducer)

export default Store;
