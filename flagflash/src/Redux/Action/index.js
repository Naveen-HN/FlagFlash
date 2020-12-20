import * as Types from "./Types";

export const fetchFlags = () => ({
    type: Types.FETCH_FLAGS,
});

export const searchFlag = (search) => ({
    type: Types.SEARCH_FLAG,
    search
})