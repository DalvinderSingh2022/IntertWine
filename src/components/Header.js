import React from 'react';

import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <h2>List Of Customers</h2>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <input
                    type="search"
                    name='search'
                    placeholder='Global Search' />
                <button type="submit"><FaSearch /></button>
            </form>
        </header>
    )
}

export default Header;