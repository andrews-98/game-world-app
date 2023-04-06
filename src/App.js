import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import MainLayout from "./layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { RequireAuth } from "./hoc/RequireAuth";
import { getValueFromLocalStorageByKey } from "./utils/getValueFromLocalStorageByKey";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setSignInStatus } from "./store/slices/authSlice";
import GameDetailsPage from "./pages/GameDetailsPage";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = getValueFromLocalStorageByKey('user');
    if (user) {
      dispatch(setUser({
        email: user.email,
        id: user.uid
      }))
      dispatch(setSignInStatus(true))
    }
  }, [])

  const { signInStatus } = useSelector((state) => state.auth)
  // console.log("SignInStatus", signInStatus);


  return (
    <Routes>
      <Route path="login" element={
        signInStatus ? <Navigate to="/games" /> : <SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/" element={<HomePage />} />

      <Route path="/" element={<MainLayout />}>
        <Route element={<RequireAuth isAuth={signInStatus} />}>
          <Route path="/games" element={<GamesPage />} />
          <Route path={`/games/:id`} element={<GameDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
