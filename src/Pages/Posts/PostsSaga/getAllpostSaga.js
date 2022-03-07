import { call,  put } from "redux-saga/effects";
import Axios from "axios";
import { fetchAllPosts ,errorfetchData} from "../PostSlice";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export default function* fetchAllPostsSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "https://jsonplaceholder.typicode.com/posts" })
    );
    yield put(fetchAllPosts(result.data));
  } catch (e) {
    
    yield put(errorfetchData(e.message));
  }
}