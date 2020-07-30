import React, { useContext } from "react";
import ProfilePage from "./components/ProfilePage";
import SignIn from "./components/SignIn";
import Layout from "./components/Layout/Layout";
import { FirebaseAuthContext } from "./context/firebaseAuthContext";

function App() {
  const user = useContext(FirebaseAuthContext);
  return <Layout>{user ? <ProfilePage /> : <SignIn />}</Layout>;
}

export default App;
