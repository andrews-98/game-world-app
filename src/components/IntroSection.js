import { GiAbstract092 } from "react-icons/gi";
import { Link } from "react-router-dom";

function IntroSection() {
    return (
        <div className="intro">
            <div className="intro__logo-box">
                <i className="intro__logo">
                    <GiAbstract092 />
                </i>
            </div>
            <div className="intro__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Virtuality</span>
                    <span className="heading-primary--sub">is where life never ends</span>
                </h1>

                <Link to="/games" className="btn btn--white btn--animated">get started</Link>
            </div>
            <div>
            </div>
        </div>

    )
}

export default IntroSection;