import React, {useState, useCallback} from 'react';
import './Navigation.css';

import {NavLink, Link} from "react-router-dom";
import SearchBar from "../searchbar";

function Navigation(props) {

    function search() {
        return;
    }

    return(
        <div>
            <header className="App-header">
                <div id="button-for-nav" /*onMouseOver={openTheNavAction}*/>
                    <div id="chevron"></div>
                    <p>Subreddits</p>
                    <ul /*style={{position: 'absolute', left: `${displayNavWhenClicked}px`, top: '35px', transition: ''}}*/ id="nav-link-list">
                        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li><NavLink to="/" className="nav-link">AskReddit</NavLink></li>
                        <li><NavLink to="/" className="nav-link">NoStupidQuestions</NavLink></li>
                        <li><NavLink to="/" className="nav-link">BaldursGate3</NavLink></li>
                        <li><NavLink to="/" className="nav-link">facepalm</NavLink></li>
                        <li><NavLink to="/" className="nav-link">interestingasfuck</NavLink></li>
                        <li><NavLink to="/" className="nav-link">Damnthatsinteresting</NavLink></li>
                        <li><NavLink to="/" className="nav-link">LivestreamFail</NavLink></li>
                        <li><NavLink to="/" className="nav-link">pics</NavLink></li>
                        <li><NavLink to="/" className="nav-link">Palworld</NavLink></li>
                        <li><NavLink to="/" className="nav-link">AmltheAsshole</NavLink></li>
                        <li><NavLink to="/" className="nav-link">mildlyinfuriating</NavLink></li>
                        <li><NavLink to="/" className="nav-link">Piracy</NavLink></li>
                        <li><NavLink to="/" className="nav-link">PeterExplainsTheJoke</NavLink></li>
                        <li><NavLink to="/" className="nav-link">funny</NavLink></li>
                        <li><NavLink to="/" className="nav-link">AITAH</NavLink></li>
                        <li><NavLink to="/" className="nav-link">movies</NavLink></li>
                        <li><NavLink to="/" className="nav-link">Helldivers</NavLink></li>
                        <li><NavLink to="/" className="nav-link">gaming</NavLink></li>
                        <li><NavLink to="/" className="nav-link">worldnews</NavLink></li>
                        <li><NavLink to="/" className="nav-link">leagueoflegends</NavLink></li>
                        <li><NavLink to="/" className="nav-link">pcmasterrace</NavLink></li>
                        <li><NavLink to="/" className="nav-link">Unexpected</NavLink></li>
                        <li><NavLink to="/" className="nav-link">news</NavLink></li>
                        <li><NavLink to="/" className="nav-link">politics</NavLink></li>
                    </ul>
                </div>
                <h1>reddit<span id="edit-header-one">client</span></h1>
                <SearchBar onSearch={search}/>
            </header>

        </div>
    );
}

export default Navigation;