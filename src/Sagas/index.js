import { all ,takeEvery} from 'redux-saga/effects'
import userSaga from "../Pages/Users/userSaga/userSaga";
import PostsSaga from "../Pages/Posts/PostsSaga";
console.log(PostsSaga)
export default function* rootSaga() {
    yield all([
        ...PostsSaga
    ])
    //yield takeEvery("FETCH_POST_DATA", postSaga);
    yield takeEvery("FETCH_DATA_SAGA", userSaga);
    
}