import { createContext, useContext, Context } from 'react'
import { useState } from 'react';

export const authUserContext = createContext({
  authUser: null,
  account: null,
});

export function AuthUserProvider({ children }) {
  const [Auth, setAuth] = useState({});
  return <authUserContext.Provider value={{ Auth, setAuth }}>{children}</authUserContext.Provider>;
}


