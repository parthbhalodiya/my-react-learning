import { takeEvery, takeLatest } from "redux-saga/effects";
import allpostSaga from "./getAllpostSaga";
import getpostSaga from "./getPostSaga";
import getpostCommentSaga from "./getAllPostCommentSaga";
const PostsSaga = [
    takeLatest("FETCH_POST_COMMENT_BY_POST_ID",getpostCommentSaga),
    takeLatest("FETCH_POST_DATA",allpostSaga),
    takeLatest("FETCH_POST_BY_ID",getpostSaga),
]

export default PostsSaga;