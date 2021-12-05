import { useContext, createContext, useEffect } from "react";
import useLocalStorage from "./../hooks/useLocalStorage";
import React from 'react'

const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }:any) {
  const [auth, setAuth] = useLocalStorage("auth", false);

  useEffect(() => {
    return () => localStorage.removeItem("cmpt373-auth");
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}