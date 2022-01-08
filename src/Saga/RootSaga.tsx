import { all } from "@redux-saga/core/effects";
import authSaga from "./AuthSaga";


export default function* rootSaga() {
    yield all([
        authSaga()
    ])
  }