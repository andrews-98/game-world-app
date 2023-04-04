import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../store/slices/authSlice";
import { getValueFromLocalStorageByKey } from "../utils/getValueFromLocalStorageByKey";
import { removeValueFormLocalStorage } from "../utils/removeValueFromLocalStorage";


function Navigation() {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const isTokenExist = getValueFromLocalStorageByKey('user');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const signOut = () => {
        dispatch(removeUser())
        removeValueFormLocalStorage('user')
        navigate('/login');
    }



    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label htmlFor="navi-toggle" className="navigation__button" onClick={() => setIsNavigationOpen(!isNavigationOpen)}>
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <div className="navigation__shimmer"></div>

            {isNavigationOpen && <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><Link to="/" className="navigation__link"><span>01</span> Home</Link></li>
                    <li className="navigation__item"><a href="" className="navigation__link"><span>02</span> About us</a></li>
                    <li className="navigation__item"><a href="" className="navigation__link"><span>03</span> Contacts</a></li>
                    <li className="navigation__item"><a href="" className="navigation__link"><span>04</span> Store</a></li>
                    {isTokenExist ?
                        <li className="navigation__item" onClick={signOut}><a href="" className="navigation__link"><span>05</span> Sign Out</a></li> :
                        <li className="navigation__item"><Link to="/login" className="navigation__link"><span>05</span> Log in</Link></li>
                    }
                </ul>
            </nav>}
        </div>
    )
}

export default Navigation;