import {
    createStore,
    applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas";
import reducers from "../Reducer/index";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

export const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);