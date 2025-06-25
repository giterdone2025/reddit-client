import React, {useState, useCallback} from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [searchInput, setSearchInput] = useState({});

    const search = useCallback(() => {
        props.onSearch(searchInput.input);
    }, [props, searchInput.input]);

    function onChange({target}) {
        const {name, value} = target;
        setSearchInput(prev => ({...prev, [name]: value}));
    }

    return(
        <div id="flex-the-search-input">
            <input
                id="search-input-text-box"
                value={searchInput.input || ''}
                onChange={onChange}
                type="text"
                name="input"
                placeholder="Search"
            />
            <div id="search-button" className="place-search-symbol" onClick={search}></div>
        </div>
    );
}

export default SearchBar;