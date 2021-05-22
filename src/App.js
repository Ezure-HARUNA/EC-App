import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)

  console.log(selector.users);
  return (
    <div>
      React app
    </div>
  )
}

export default App

