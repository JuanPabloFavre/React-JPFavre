import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <div className='search'>

            <nav className="navbar bg-body-tertiary " data-bs-theme="dark">
                <div className="container-fluid d-flex justify-content-center">
                    <form className="d-flex" role="search" >
                        <input className="form-control me-2" type="search" placeholder="" aria-label="Search" ></input>
                        <button className="btn btn-info" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>

        </div>
    );
};

export default Search;
