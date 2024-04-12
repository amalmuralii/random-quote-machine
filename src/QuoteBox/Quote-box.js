import React from "react";
import './Quote-box.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsQuote } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";


function QuoteBoxComponent() {
    const [content, setContent] = useState('Rest at the end, not in the middle.');
    const [author, setAuthor] = useState('Amal Murali');
    const twitterLogo = 'https://www.svgrepo.com/show/475689/twitter-color.svg';

    useEffect(() => {
        getQuote();
    }, []);

    function getQuote() {
        axios.get('https://api.quotable.io/random').then(res => {
            if (res) {
                setContent(res.data?.content);
                setAuthor(res.data?.author);
            }
        })
    }

    return (
        //Do not edit the id names.
        <div id="quote-box" className="quote-box">
            {/* Text container start */}
            <div id="text" className="quote-text">
                <p>
                    <BsQuote />
                    {content}
                </p>
            </div>
            {/* End of text */}

            {/* Author container start */}
            <div id="author" className="author">
                <p>
                    - {author}
                </p>
            </div>
            {/* End of author  */}

            {/* Buttons container start*/}
            <div className="buttons">
                <button className="button" type="submit">
                    <a
                        id="tweet-quote"
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${content} - ${author}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="logo"
                            src={twitterLogo}
                            alt="logo"
                        />
                    </a>
                </button>
                <button
                    className="button"
                    onClick={getQuote}>
                    <TfiReload />
                </button>
            </div>
            {/* End of buttons */}
        </div>
    )
}

export default QuoteBoxComponent