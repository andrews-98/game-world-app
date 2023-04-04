import { Link } from "react-router-dom";
import { GiAbstract092 } from "react-icons/gi";

function Footer() {
    return <div className="footer">
        <div className="footer__logo-box">
            <Link to={'/'} >
                <i className="footer__logo">
                    <GiAbstract092 />
                </i>
            </Link>
        </div>

        <div className="footer__content">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="" className="footer__link">Company</a></li>
                    <li className="footer__item"><a href="" className="footer__link">Contact</a></li>
                    <li className="footer__item"><a href="" className="footer__link">Careers</a></li>
                    <li className="footer__item"><a href="" className="footer__link">Privacy policy</a></li>
                    <li className="footer__item"><a href="" className="footer__link">Terms</a></li>
                </ul>
            </div>
            <div className="footer__copyright">
                Designed and developed by <a href="#" className="footer__link">Andrew Sinkevych</a>, consectetur adipisicing elit. Beatae
                laudantium mollitia dolores est
                facere dolorum tenetur tempore libero explicabo. Culpa ea esse nisi fuga nulla atque explicabo
                impedit sed temporibus! Dolor laboriosam dolorem vero numquam nemo itaque error sunt laborum ea
                commodi, similique asperiores aperiam tempora id officiis assumenda perspiciatis!
            </div>
        </div>
    </div>
}

export default Footer;