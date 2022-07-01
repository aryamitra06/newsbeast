const initialState = {
    news: [],
    loading: false
}

export default function news(state = initialState, action) {
    switch (action.type) {
        case "GET_NEWS_REQUESTED":
            return {
                ...state, loading: true
            }
        case "GET_NEWS_SUCCESS":
            return {
                ...state, loading: false, news: action.payload
            }
        default:
            return state;
    }
}