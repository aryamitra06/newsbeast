import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';




//saga generators

function* fetchNews() {
    try{
        const news = yield call(()=>axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a808d7243f20469c810b10af5f78183c`))
        yield put({ type: 'GET_NEWS_SUCCESS', payload: news })
    }
    catch(e){
        console.log(e);
    }
}

function* newsSaga(){
    yield takeEvery('GET_NEWS_REQUESTED', fetchNews)
}

export default newsSaga;