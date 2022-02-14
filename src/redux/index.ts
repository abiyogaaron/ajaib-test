import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { IUserPageAction } from '../types/userPage';

import userPageReducer from './reducer/userPage';

const rootReducer = combineReducers({
  userPage: userPageReducer,
});

let composeEnhancer = compose;
if (process.env.NODE_ENV !== 'production') {
  composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancer(
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>),
);

export type AppState = ReturnType<typeof rootReducer>;
export type TAppStateKey = keyof AppState;
export type AppAction =
 | IUserPageAction;

export default createStore(rootReducer, middleware);
