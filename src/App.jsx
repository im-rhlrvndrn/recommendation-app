import React, { useState } from 'react';

// styles
import './css/index.css';

const App = () => {
    const resources = {
        html: [
            {
                link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                author: 'MDN',
                title: 'Learn HTML',
            },
            {
                link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
                author: 'MDN',
                title: 'Structuring the web with HTML',
            },
        ],
        css: [
            {
                link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
                author: 'MDN',
                title: 'Learn to style HTML using CSS',
            },
            {
                link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
                author: 'MDN',
                title: 'CSS Flexbox',
            },
            {
                link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids',
                author: 'MDN',
                title: 'CSS Grids',
            },
            {
                link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning',
                author: 'MDN',
                title: 'CSS Positioning',
            },
            {
                link:
                    'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
                author: 'MDN',
                title: 'Responsive Design',
            },
            {
                link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries',
                author: 'MDN',
                title: 'Beginners Guide to Media Queries',
            },
        ],
        react: [
            {
                link: 'https://reactjs.org/docs/getting-started.html',
                author: 'ReactJS',
                title: 'ReactJS Comprehensive Documentation',
            },
            {
                link: 'https://reactjs.org/tutorial/tutorial.html',
                author: 'ReactJS',
                title: 'Learn ReactJS by building projects',
            },
        ],
        nodejs: [
            {
                link: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
                author: 'Brad Traversy',
                title: 'NodeJS Crash Course',
            },
        ],
    };
    const [genreListings, setGenreListings] = useState(resources['html']);
    const resourceKeys = Object.keys(resources);

    return (
        <div className='mainApp'>
            <div className='mainAppWrapper'>
                <h1>Getting started with web development</h1>
                <p>Find resources to learn the latest and most in-demand tech stacks</p>
                <div className='genreContainer'>
                    {resourceKeys.map((resource) => (
                        <div
                            onClick={() => setGenreListings(resources[resource])}
                            className='genreItem'
                        >
                            {resource}
                        </div>
                    ))}
                </div>
                <div className='genreListingsContainer'>
                    {genreListings.map(({ link, title, author }) => {
                        return (
                            <a key={link} target='_blank' href={link} className='genreListing'>
                                <h3>{title}</h3>
                                <p className='listingAuthor'>By {author}</p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
