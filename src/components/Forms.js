import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const mapValidationMessages = {
    ['auth/invalid-email']: 'This email is invalid. Please use the correct email.',
    ['auth/email-already-in-use']: 'User with this email already registered.',
    ['auth/weak-password']: 'This password is too weak. Minimum length of characters is 6.',
    ['auth/too-many-requests']: 'Too many request. Please try to login later.',
    ['auth/invalid-email']: 'This email is invalid. Please use the correct email.',
    ['auth/wrong-password']: 'Incorrect password. Please try again.',
    ['auth/user-not-found']: 'User with this email in not found. Please write the correct email.',
    ['auth/too-many-requests']: 'Too many request. Please try login later.'
}

function Forms({ handleClick, error, isLoading }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="form" onSubmit={(e) => handleClick(e, email, password)}>
            <div className="form__group">
                <input type="email"
                    className="form__input"
                    placeholder="Email adress"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor="email" className="form__label">Email</label>
            </div>

            <div className="form__group">
                <input type="password"
                    className="form__input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <label htmlFor="password" className="form__label">Password</label>
            </div>

            <div className="form__group u-center-text">
                {isLoading ? <i><AiOutlineLoading3Quarters className="loading-spinner-small" /></i> : <button className="btn btn--white">Submit</button>}

            </div>

            <p className="auth-error-message u-center-text">{error && mapValidationMessages[error]}</p>
        </form>
    )

}

export default Forms;