import { Alert } from "../components/Alert";
import GameList from "../components/GameList";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";




function GamesPage() {
    const { showAlert  } = useSelector((state) => state.auth);

    return <div className="gamepage-container">
        <div className="u-center-text">
            <h3 className="heading-secondary">Games</h3>
        </div>
        <div className="content-box">
            <Sidebar />
            <GameList />
        </div>
        {showAlert && <Alert type='success'/>}
    </div >
}

export default GamesPage;