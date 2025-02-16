import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
    return (
        <div>
            <section id='landing'>
                <div className="header__description">
                    <h1>Australia's most awarded online library platform</h1>
                    <h2>Find your dream book with <span className='purple'>Library</span></h2>
                    <a href="#features">
                        <button className='header_img--wrapper'>
                            <img src={UndrawBooks} alt="" />
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Landing;