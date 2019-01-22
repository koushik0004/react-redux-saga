import {put, takeLatest, all} from 'redux-saga/effects';

function* fetchNews(){
  const json = yield fetch('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=5828055bb3d64385832b7d53a12f6ba5')
                .then(response => response.json());

  yield put({type: 'NEWS_RECEIVED', json: json.articles});
}

function* actionWatchers(){
  yield takeLatest('GET_NEWS', fetchNews);
}

export default function* rootSaga() {
  yield all([
    actionWatchers()
  ])
}