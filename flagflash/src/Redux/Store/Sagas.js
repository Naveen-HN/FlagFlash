import {
    takeEvery,
    call,
    put
} from "redux-saga/effects";
import * as Types from "../Action/Types";
import {
    GetDataFromServer
} from "../Service";

const url = "https://countries-274616.ew.r.appspot.com/";

export function* fetchFlags(action) {
    try {
        const body = {
            query: `query{
  Flag{
    svgFile,
    country{
      name,
      capital,
      population,
      officialLanguages{
        name
      }
      currencies{
        name,
        symbol
      }
    }
  }
}`,
        };

        const response = yield call(GetDataFromServer, url, "POST", body);
        const result = yield response.json();
        if (result.error) {
            yield put({
                type: Types.FETCH_FLAGS_ERROR,
                error: result.error,
            });
        } else {
            yield put({
                type: Types.FETCH_FLAGS_SUCCESS,
                result,
            });
        }
    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga(params) {
    yield takeEvery(Types.FETCH_FLAGS, fetchFlags);
}