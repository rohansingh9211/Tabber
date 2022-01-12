import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from "../Features/Userslice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware({ 
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);





// import { createStore } from "redux";
// import {rootReducers} from "./"
// window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()




// import { configureStore }from "@reduxjs/toolkit"
// import userReducer from "../Features/Userslice"
// export default configureStore({
//     reducer:{
//         user:userReducer,  
//     },
// });