import { createStore } from 'redux';

import cartReducer from './Reducers/cartReduceer';

const store = createStore(cartReducer);

export default store;