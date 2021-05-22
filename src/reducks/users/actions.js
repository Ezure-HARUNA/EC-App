//!action
//!データをreducerに渡すだけ。変更はreducerに任せる

//export文を書く
export const SIGN_IN = "SIGN_IN"
//action部分を書く
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username
    }
  }
}

export const SIGN_OUT = "SIGN_OUT"
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: ""
    }
  }
}