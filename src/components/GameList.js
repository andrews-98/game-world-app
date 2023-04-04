import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useThunk } from "../hooks/useThunk";
import { fetchGames } from "../store";
import GameListItem from "./GameListItem";
import Pagination from "./Pagination";
import Skeleton from "./Skeleton";

function GameList() {
    const [gamesFetch, isLoadingGamesError] = useThunk(fetchGames);
    const [filteredGameList, setFilteredGameList] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        gamesFetch()
    }, [])

    const { gameList, isLoading } = useSelector((state) => {
        return state.games
    })

    const displaySkeletonTimes = () => {
        if (window.innerWidth < 468) {
            return 3
        }

        if (window.innerWidth < 768) {
            return 6
        }
        return 9
    }


    let content;
    if (isLoading) {
        content = <Skeleton times={displaySkeletonTimes()} />
    } else if (isLoadingGamesError || gameList.length === 0) {
        content = <h1 className="u-center-text">Oops, something went wrong with fetching games</h1>
    }
    else {
        content = filteredGameList.map((game) => {
            return <div className="gamelist-item" key={game.id}
                onClick={() => navigate(`/games/${game.id}`)}
            >
                <GameListItem
                    image={game.background_image}
                    name={game.name}
                    genres={game.genres}
                    rating={game.rating}
                    slug={game.slug}
                />
            </div>
        })
    }

    return (
        <div className="gamelist-container">
            <div className="gamelist">
                {content}
            </div>
            <div className="pagination-box">
                <Pagination itemsCount={12} data={gameList} setFilteredGameList={setFilteredGameList} />
            </div>
        </div>
    )
}

export default GameList;