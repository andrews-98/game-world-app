import { useState } from "react";
import Header from "../layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Forms from "../components/Forms";


function SignUp() {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState('');

    const handleRegister = (e, email, password) => {
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                user && navigate('/login')
            })
            .catch((err) => setErrMessage(err.message.match(/\((.*?)\)/)))
    }

if(errMessage){
    console.log(errMessage);
}


    return <div>
        <Header />
        <div className="signup-wrapper">
            <div className="u-center-text">
                <h3 className="heading-secondary">Sign Up</h3>
            </div>
            <Forms handleClick={handleRegister} error={errMessage[1]} />
            <div className="u-center-text u-margin-top-small">
                <p className="sign-up">Already have an account? <Link to="/login" className="sign-up__link">Sign In</Link></p>
            </div>
        </div>
    </div>
}

export default SignUp;