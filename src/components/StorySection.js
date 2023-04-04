import { Link } from "react-router-dom";

import avatar from "../assets/story-logo.png";
import avatar_2 from "../assets/story-logo-2.png";
import video from "../assets/story-bg-video.mp4";

function StorySection() {
    return <div className="section-stories">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>

        <div className="u-center-text u-margin-bottom-big">
            <h1 className="heading-secondary">
                We love it
            </h1>
        </div>

        <div className="story">
            <figure className="story__shape">
                <img src={avatar} alt="Person story" className="story__img" />
                <figcaption className="story__caption">Jaden Smith</figcaption>
            </figure>
            <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">Game developer about passion to games</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat modi odit, natus neque
                    eveniet ea reiciendis, atque ratione nobis sapiente repellat. Dolores doloremque, similique
                    error officiis illum id veritatis, ipsam quidem saepe illo impedit earum dicta ducimus
                    consectetur ipsum veniam praesentium .
                </p>
            </div>
        </div>

        <div className="story ">
            <figure className="story__shape">
                <img src={avatar_2} alt="Person story" className="story__img" />
                <figcaption className="story__caption">Loren Tsumi</figcaption>
            </figure>
            <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">Game developer about passion to games</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat modi odit, natus neque
                    eveniet ea reiciendis, atque ratione nobis sapiente repellat. Dolores doloremque, similique
                    error officiis illum id veritatis, ipsam quidem saepe illo impedit earum dicta ducimus
                    consectetur ipsum veniam praesentium .
                </p>
            </div>
        </div>

        <div className="u-center-text">
            <Link className="btn btn-text">Read all stories</Link>
        </div>

    </div>
}

export default StorySection;