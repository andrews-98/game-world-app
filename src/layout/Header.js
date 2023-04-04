import { GiAbstract092 } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import UserBox from "./UserBox";

function Header() {

    const user = useSelector((state) => {
        return state.auth
    })


    return <div className="header">
        <div>
            <Navigation />
        </div>
        <div className="header__logo-box">
            <Link to={'/'} >
                <i className="header__logo">
                    <GiAbstract092 />
                </i>
            </Link>
        </div>
        {user.id && <div className="user-box">
            <UserBox />
        </div>}
    </div>

}
export default Header;