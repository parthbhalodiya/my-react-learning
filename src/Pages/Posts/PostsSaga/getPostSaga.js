import { call,  delay,  put, takeEvery, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import { fetchPostById ,errorfetchData} from "../PostSlice";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export default  function* fetchPostByIdSaga() {
  try {
    yield delay(1000)
    let result = yield call(() =>
      callAPI({ url: "https://jsonplaceholder.typicode.com/posts/1" })
    );
    
    yield put(fetchPostById(result.data));
  } catch (e) {
    
    yield put(errorfetchData(e.message));
  }
}

