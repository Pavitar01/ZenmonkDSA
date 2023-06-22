import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import UserSlice from './Slice/UserSlice';
import ResumeSlice from './Slice/ResumeSlice';
const persistConfig = {
    key: 'userdata',
    storage,
    blacklist:['']
  }
  const pdata = combineReducers({
    userSice: UserSlice,
    resumeSlice:ResumeSlice
  });

const persistedReducer = persistReducer(persistConfig, pdata);
export const store = configureStore({
    reducer: persistedReducer,
  });
export const persister=persistStore(store);
