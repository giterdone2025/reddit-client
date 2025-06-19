import React, {useState, useCallback} from 'react';
import './Navigation.css';

import {NavLink, Link} from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

function Navigation(props) {

    function search() {
        return;
    }

    return(
        <div>
            <header className="App-header">
                <a href="/">
                    <div id="chevron-left"></div>
                    <p>Subreddits</p>
                </a>
                <h1>reddit<span id="edit-header-one">client</span></h1>
                <SearchBar onSearch={search}/>
            </header>
            <ul id="nav-link-list">
                <li><NavLink href="/" className="nav-link">Home</NavLink></li>
            </ul>
        </div>
    );
}

export default Navigation;