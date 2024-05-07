// src/actions/authActions.js

// Action Type
export const LOGIN = 'LOGIN';

// Action Creator for User Login
export const loginAction = (userData:any) => {
  return {
    type: LOGIN,
    payload: userData
  };
};
