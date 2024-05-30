import React, { useEffect, useState } from "react";

import { StyleSheet, View } from "react-native";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LittleLemonFooter from "./components/LittleLemonFooter.js";
import LittleLemonHeader from "./components/LittleLemonHeader.js";
import MenuItems from "./components/MenuItems.js";
import { app } from "./configFirebase.js";
import LoginScreen from "./LoginScreen.js";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const auth = getAuth(app);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleAuthentication = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  if (initializing) return null;
  return (
    <>
      {user ? (
        <>
          <View style={styles.container}>
            <LittleLemonHeader />
            <MenuItems />
          </View>
          <View style={styles.footerContainer}>
            <LittleLemonFooter />
          </View>
        </>
      ) : (
        <View style={styles.screenContainer}>
          <LoginScreen
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleAuthentication={handleAuthentication}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  footerContainer: { backgroundColor: "#333333" },
});
