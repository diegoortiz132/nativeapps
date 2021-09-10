import {createStore, applyMiddleware} from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from '../sagas';

function reducers(state, action) {
  return {
    movie: action.Search,
  };
}

const sagaMiddleware = reduxSaga();

export default () => {
  return {
    ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};
