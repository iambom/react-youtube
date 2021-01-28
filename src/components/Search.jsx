import React from 'react';
import logoImg from '../images/logo.png';

const Search = () =>{
    return(
        <div className="search">
            <img src={logoImg} alt="youtube logo"/>
            <form action="">
                <input type="text" placeholder="Search.." />
                <button>search button</button>
            </form>
        </div>
    )
}

export default Search;