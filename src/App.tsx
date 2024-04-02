import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => checkUserInfo(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const checkUserInfo = useCallback((userResponse) => {
    if (userResponse) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${userResponse.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={login}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}

export default App;
