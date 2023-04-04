import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Header from "../layout/Header";
import Forms from "../components/Forms";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setSignInStatus, toggleAlert } from "../store/slices/authSlice";
import { useState } from "react";
import { Alert } from "../components/Alert";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = (e, email, password) => {
    e.preventDefault();
    setIsLoading(true)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        localStorage.setItem('user', JSON.stringify(user))

        dispatch(setUser({
          email: user.email,
          id: user.uid
        }));
        dispatch(setSignInStatus(true))
        dispatch(toggleAlert(true))
        user && navigate('/games')
        setIsLoading(false)
      })
      .catch(err => setErrMessage(err.message.match(/\((.*?)\)/)))
  }
  if (errMessage) {
    console.log(errMessage);
  }

  const { showAlert } = useSelector((state) => state.auth);


  return <div>
    <Header />
    <div className="login-wrapper">
      <div className="u-center-text">
        <h3 className="heading-secondary">Log In</h3>
      </div>
      <Forms handleClick={handleLogin} error={errMessage[1]} isLoading={isLoading} />
      <div className="u-center-text u-margin-top-small">
        <p className="sign-up">Have no account yet? <Link to="/signup" className="sign-up__link">Sign Up</Link></p>
      </div>
    </div>
    {showAlert && <Alert type='warning' />}
  </div>
}

export default SignIn;