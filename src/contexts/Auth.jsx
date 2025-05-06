import React,{useState, useEffect, useContext, createContext, useReducer} from 'react'

const AuthContext = createContext()

const initialState = {isAuth: false, user: {}}

const reducer =(state, Action)=>{
  switch (Action.type) {
    case "SET_LOGGED_IN":
         return {isAuth: true, user: payload.user};
    case "SET_LOGGED_OUT":
         return {initialState};
    default:
     state 
}
}


const Auth = ({children}) => {
    const [state, dispatch] = useReducer(initialState, reducer )


  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext =() => useContext(AuthContext)

export default Auth