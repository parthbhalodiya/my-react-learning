import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import createSagaMiddleware from 'redux-saga'
import userReducer from './Pages/Users/userSlice'
import postReducer from './Pages/Posts/PostSlice'

import rootSaga from './Sagas';
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        users:userReducer,
        posts:postReducer
    },
    middleware: (getDefaultMiddleware) => {
        
       return  getDefaultMiddleware().concat(sagaMiddleware)
    }
    ,
})

setupListeners(store.dispatch)
sagaMiddleware.run(rootSaga)

