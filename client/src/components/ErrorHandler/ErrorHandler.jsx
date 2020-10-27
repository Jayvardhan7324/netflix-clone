import React from 'react';

// scss files
import './ErrorHandler.scss';

const ErrorHandler = ({ setError, movie_name }) => {
    const query = movie_name?.toLowerCase().split(' ').join('+');

    return (
        <div className='error'>
            <div className='overlay' onClick={() => setError('')}></div>
            <div className='error_container'>
                <h1>Trailer Not Found!</h1>
                <div className='error_container_ctas'>
                    <button onClick={() => setError('')} className='error_container_ctas_cta'>
                        Continue Browsing
                    </button>
                    <button onClick={() => setError('')} className='error_container_ctas_cta'>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href={`https://www.google.com/search?q=${query}+official+trailer`}
                        >
                            search on chrome
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorHandler;