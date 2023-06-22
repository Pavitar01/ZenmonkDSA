import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import UserSlice from './Slice/UserSlice';
import ResumeSlice from './Slice/ResumeSlice';

const persistConfig = {
  key: 'userdata',
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  userData: UserSlice,
  resumeData: ResumeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
