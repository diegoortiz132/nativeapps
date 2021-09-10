import {put, call, takeLatest} from 'redux-saga/effects';
import {GET_MOVIES, SUCCESS_MOVIES} from '../actions/movies';
import apiCall from '../api';

const method = 'GET';
const url = 'http://www.omdbapi.com/?apikey=';
const key = '5eec5adc';
const word = 'love';
const fullUrl = `${url}${key}&s=${word}`;

function* getMovies({payload}) {
  try {
    const {Search} = yield call(apiCall, method, fullUrl);
    yield put({type: SUCCESS_MOVIES, Search});
  } catch (error) {
    console.error(error);
  }
}

export default function* movies() {
  yield takeLatest(GET_MOVIES, getMovies)
}