import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import {signInAction} from "./reducks/users/actions"

const App = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)

  console.log(selector.users);
  return (
    <div>
      React app
      <button onClick={() => dispatch(signInAction({uid: "00001", username: "torahack"}))}>
        Sign In
      </button>
    </div>
  )
}

export default App

