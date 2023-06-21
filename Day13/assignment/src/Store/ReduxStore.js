import { configureStore,combineReducers} from "@reduxjs/toolkit";
import NewsSlice from "../redux/Slice/NewsSlice";
import ProductSlice from "../redux/Slice/ProductSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import product from "../redux/Slice/NewProduct";


const persistConfig = {
  key: "data",
  storage,
  blacklist: ['Product'],

};
const pdata = combineReducers({
  News: NewsSlice,
  Product: ProductSlice,
  NewProd:product

});
const persistedReducer = persistReducer(persistConfig, pdata);
// const persistor = persistStore();

export const store = configureStore({
  reducer: persistedReducer,
});
export const persister=persistStore(store);
