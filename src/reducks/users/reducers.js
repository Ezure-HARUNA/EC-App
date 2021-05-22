//!reducers
//actionsファイル内のモジュールを全てimport
//initialStateをimport
import * as Actions from './actions'
import initialState from '../store/initialState'

//第一引数にstate, 第二引数にactionがreturnした値
export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    //actionsのtypeに応じてstateをどう変更するのか決める
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}