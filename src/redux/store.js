// import { createStore, combineReducers } from 'redux';
import phonebookReducers from '../redux/phonebookReducers';
import { configureStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   contacts: phonebookReducers,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: phonebookReducers,
});

export default store;
