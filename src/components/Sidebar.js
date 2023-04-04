import { GENRES } from "../enums/enum";
import { useThunk } from "../hooks/useThunk"
import { fetchGamesByGenre } from "../store/thunks/gamesFetchByGenre";
import { fetchGames } from "../store";

function Sidebar() {
    const [fetchGenre] = useThunk(fetchGamesByGenre)
    const [fetchAllGames] = useThunk(fetchGames);

    const fetchByGenre = (genre) => {
        fetchGenre(genre)
    }

    const fetchAllGenres = () => {
        fetchAllGames()
    }

    return <div className="sidebar">
        <ul className="sidebar__menu">
            <li className="menu__item" onClick={fetchAllGenres}>All</li>
            {Object.entries(GENRES).map((genre, i) => {
                return <li key={i} className="menu__item" onClick={() => fetchByGenre(genre[1])}>
                    {genre[0]}
                </li>
            })}
        </ul>
    </div>
}

export default Sidebar;