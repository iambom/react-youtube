import React, { useRef, memo } from 'react';
import logoImg from '../images/logo.png';
import styles from './Search.module.css';

const Search = memo(
    ({onSearch}) =>{
        const inputRef = useRef();
        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
        }
        const onClick = () => {
            handleSearch();
        }
        const onKeyPress = (event) => {
            if(event.key === "Enter"){
                handleSearch();
            }
        }
        return(
            <header className={styles.header}>
                <img className={styles.img} src={logoImg} alt="youtube logo"/>
                <input ref={inputRef} className={styles.input} type="search" placeholder="Search.." onKeyPress={onKeyPress}/>
                <button className={styles.button} type="submit" onClick={onClick}>search button</button>
            </header>
        )
    }
);

export default Search;