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
        <div>
            <input
                value={searchInput.input || ''}
                onChange={onChange}
                type="text"
                name="input"
                placeholder="Search"
            />
            <a className="place-search-symbol" onClick={search}>
                <div className="place-search-symbol"></div>
            </a>
        </div>
    );
}

export default SearchBar;