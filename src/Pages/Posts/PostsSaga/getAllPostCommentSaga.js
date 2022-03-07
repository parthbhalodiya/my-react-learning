import { call,  put } from "redux-saga/effects";
import Axios from "axios";
import { fetchCommentByPostId ,errorfetchData,} from "../PostSlice";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export default function* fetchAllPostsSaga(action) {
 
  
  try {
    let result = yield call(() =>
      callAPI({ url: `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments` })
    );
    yield put(fetchCommentByPostId(result.data));
  } catch (e) {
    
    yield put(errorfetchData(e.message));
  }
}