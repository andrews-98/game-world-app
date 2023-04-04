import { Link } from "react-router-dom";
import img1 from "../assets/composition-1.jpg"
import img2 from "../assets/composition-2.jpg"
import img3 from "../assets/composition-3.jpg"


function AboutSection() {
    return (
        <div className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h1 className="heading-secondary">
                    Play your favorite games in one moment
                </h1>
            </div>
            <div className="about">
                <div className="about__left">
                    <div className="about__text">
                        <h1 className="heading-tertiary u-margin-bottom-small">
                            You're going to fall in love with world of games
                        </h1>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam illo quae eius consequatur
                            doloremque aut ipsum expedita, voluptatem error veritatis aliquid, fuga sunt, nostrum in
                            ratione? Odit, officiis rem.
                        </p>
                        <h1 className="heading-tertiary u-margin-bottom-small">
                            Feel emotions with your game heroes
                        </h1>
                        <p className="paragraph u-margin-bottom-small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam illo quae eius consequatur
                            doloremque aut ipsum expedita.
                        </p>
                    </div>
                    <Link to="/games" className="about-btn btn btn--green">
                        Go to store
                    </Link>
                </div>
                <div className="about__right">
                    <div className="about__composition">
                        <img src={img1} alt="" className="about__composition__photo about__composition__photo--p1"></img>
                        <img src={img2} alt="" className="about__composition__photo about__composition__photo--p2"></img>
                        <img src={img3} alt="" className="about__composition__photo about__composition__photo--p3"></img>
                        {/* <img src={img4} alt="" className="about__composition__photo about__composition__photo--p4"></img> */}
                        {/* <img src={img5} alt="" className="about__composition__photo about__composition__photo--p5"></img> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection;