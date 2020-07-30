import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const FirebaseAuthContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  }, []);
  return (
    <FirebaseAuthContext.Provider value={user}>
      {props.children}
    </FirebaseAuthContext.Provider>
  );
};
export default UserProvider;
