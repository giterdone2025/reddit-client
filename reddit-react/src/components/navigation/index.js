import React from 'react';
import './Navigation.css';
//import {getPosts} from '../../api/postFinder';
import {NavLink} from "react-router-dom";
import SearchBar from "../searchbar";

function Navigation() {
/*    const [data, setData] = useState(null);

    useEffect(() => {
        async function getPostsData() {
            const { postsData } = await getPosts();
            setData(postsData);
        }

        getPostsData();
    }, []);*/

    function search() {
        return;
    }

    return(
        <div>
            <header className="App-header">
                <div id="div-for-nav">
                    <div id="chevron"></div>
                    <p>Subreddits</p>
                    <ul id="nav-link-list">
                        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li><NavLink to="/AskReddit" className="nav-link">AskReddit</NavLink></li>
                        <li><NavLink to="/NoStupidQuestions" className="nav-link">NoStupidQuestions</NavLink></li>
                        <li><NavLink to="/BaldursGate3" className="nav-link">BaldursGate3</NavLink></li>
                        <li><NavLink to="/facepalm" className="nav-link">facepalm</NavLink></li>
                        <li><NavLink to="/interestingasheck" className="nav-link">interestingasheck</NavLink></li>
                        <li><NavLink to="/Dangthatsinteresting" className="nav-link">Dangthatsinteresting</NavLink></li>
                        <li><NavLink to="/LivestreamFail" className="nav-link">LivestreamFail</NavLink></li>
                        <li><NavLink to="/pics" className="nav-link">pics</NavLink></li>
                        <li><NavLink to="/Palworld" className="nav-link">Palworld</NavLink></li>
                        <li><NavLink to="/AmltheButthole" className="nav-link">AmltheButthole</NavLink></li>
                        <li><NavLink to="/mildlyinfuriating" className="nav-link">mildlyinfuriating</NavLink></li>
                        <li><NavLink to="/Piracy" className="nav-link">Piracy</NavLink></li>
                        <li><NavLink to="/PeterExplainsTheJoke" className="nav-link">PeterExplainsTheJoke</NavLink></li>
                        <li><NavLink to="/funny" className="nav-link">funny</NavLink></li>
                        <li><NavLink to="/AITAH" className="nav-link">AITAH</NavLink></li>
                        <li><NavLink to="/movies" className="nav-link">movies</NavLink></li>
                        <li><NavLink to="/Helldivers" className="nav-link">Helldivers</NavLink></li>
                        <li><NavLink to="/gaming" className="nav-link">gaming</NavLink></li>
                        <li><NavLink to="/worldnews" className="nav-link">worldnews</NavLink></li>
                        <li><NavLink to="/leagueoflegends" className="nav-link">leagueoflegends</NavLink></li>
                        <li><NavLink to="/pcmasterrace" className="nav-link">pcmasterrace</NavLink></li>
                        <li><NavLink to="/Unexpected" className="nav-link">Unexpected</NavLink></li>
                        <li><NavLink to="/news" className="nav-link">news</NavLink></li>
                        <li><NavLink to="/politics" className="nav-link">politics</NavLink></li>
                    </ul>
                </div>
                <h1>reddit<span id="edit-header-one">client</span></h1>
                <SearchBar onSearch={search}/>
            </header>

        </div>
    );
}

export default Navigation;