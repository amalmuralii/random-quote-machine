import React from "react";
import './Quote-box.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsQuote } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { BsDash } from "react-icons/bs";


function QuoteBoxComponent() {
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

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
                <p> <BsDash /> {author}</p>
            </div>
            {/* End of author  */}

            {/* Buttons container start*/}
            <div className="buttons">
                <button className="button" type="submit">
                    <img className="logo" src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="logo" />
                    <a id="tweet-quote"></a>
                </button>
                <button className="button" onClick={getQuote}>
                    <TfiReload />
                </button>
            </div>
            {/* End of buttons */}
        </div>
    )
}

export default QuoteBoxComponent