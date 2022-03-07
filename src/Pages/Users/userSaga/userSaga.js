import { call,  put } from "redux-saga/effects";
import Axios from "axios";
import { fetchAllUsers ,errorfetchData} from "../userSlice";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export default function* fetchAllUserSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "https://jsonplaceholder.typicode.com/users" })
    );
    yield put(fetchAllUsers(result.data));
  } catch (e) {
    
    yield put(errorfetchData(e.message));
  }
}