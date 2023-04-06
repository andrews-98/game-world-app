import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useThunk } from "../hooks/useThunk";
import { fetchGameDetails } from "../store";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function GameDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [fecthData, isLoading, isLoadingError] = useThunk(fetchGameDetails);

    useEffect(() => {
        fecthData(id)
    }, [fecthData])


    const { gameDetails } = useSelector((state) => {
        return state.games
    })

    console.log(gameDetails);

    let gameAtributtes;
    if (gameDetails) {
        gameAtributtes = {
            developers: gameDetails.developers?.map((developer) => `${developer.name + ', '}`),
            genres: gameDetails.genres?.map((genre) => `${genre.slug + ', '}`),
            platforms: gameDetails.platforms?.map(({ platform }) => `${platform.name + ', '}`)
        }
    }

    return (
        isLoading ?
            <div className="loader">
                <i><AiOutlineLoading3Quarters className="loading-spinner-big" /></i>
            </div>
            :
            <div className="game-container">
                <div className="goback-btn" onClick={() => {
                    navigate(-1);
                }}>
                    <a href="#" className="goback-btn__link">
                        <BsFillArrowLeftCircleFill />
                    </a>
                </div>
                <div className="game" >
                    <div className="game__name">
                        <h1 className="headnig-primary">{gameDetails.name}</h1>
                    </div>
                    <div className="game__image">
                        <img src={gameDetails.background_image}></img>
                    </div>
                    <div className="game__description">
                        {/* <h1 className="game__description__heading">Description</h1> */}
                        <p className="game__description__text">
                            {gameDetails.description_raw}
                        </p>
                    </div>
                    <div className="game__additional-image">
                        <img src={gameDetails.background_image_additional
                        }></img>
                    </div>
                    <div className="game__attributes">
                        <ul className="game__attributes__items">
                            <li className="game__attributes__item">Publisher: <span>{gameAtributtes.developers}</span> </li>
                            <li className="game__attributes__item">Raiting: {gameDetails.rating},</li>
                            <li className="game__attributes__item">Genre: {gameAtributtes.genres} </li>
                            <li className="game__attributes__item">Website: <a href={gameDetails.website}>{gameDetails.website}</a></li>
                            <li className="game__attributes__item">Platforms: {gameAtributtes.platforms}</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}


export default GameDetailsPage;