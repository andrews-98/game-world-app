import { BiUserCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { removeValueFormLocalStorage } from "../utils/removeValueFromLocalStorage";
import { removeUser } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getValueFromLocalStorageByKey } from "../utils/getValueFromLocalStorageByKey";
import { useState } from "react";

function UserBox() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userAttributes, setUserAttributes] = useState({
        email: ''
    })

    useEffect(() => {
        const { email } = getValueFromLocalStorageByKey('user');
        setUserAttributes({
            ...userAttributes,
            email: email
        })
    }, [])


    const signOut = () => {
        dispatch(removeUser())
        removeValueFormLocalStorage('user')
        navigate('/login');
    }


    return <div className="user-box__content">
        <div className="user-box__icon">
            <BiUserCircle />
        </div>
        <div className="user-box__info">
            <div className="user-box__email">{userAttributes.email}</div>
            <div className="user-box__type">User</div>
        </div>

        <div>
            <a href="#" className="user-box__button" onClick={signOut}>
                <HiOutlineLogout />
            </a>
        </div>
    </div>
}

export default UserBox;