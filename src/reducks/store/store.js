//reduxモジュールのimport
import {
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux';

//import reducers
// import  ProductsReducer  from '../users/reducers';
import { UsersReducer } from '../users/reducers';

export default function createStore() {
  return reduxCreateStore(  //createStoreメソッドの別名
    //分割したReducersをまとめる。
    combineReducers({
      // products: ProductsReducer,
      users: UsersReducer,
    })
  )
}