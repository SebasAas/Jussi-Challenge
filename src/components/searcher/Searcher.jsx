import React, { useState } from 'react';
import { motion } from "framer-motion";

// Components
import LoaderDots from '../loader/LoaderDots'

// Icons
import SearchLogo from '../../assets/svg/search.svg';

function Searcher() {
    const [rotate, setRotate] = useState(false);
    const [typing, setTyping] = useState("");

    const handleHoverOn = () => setRotate(true);

    const handleHoverOff = () => setRotate(false);

    const variants = {
        scale: [1, 1.3, 1],
    }

    const animateState = () => {
        if (rotate) {
            return variants
        }
        return null
    }

    const search = searchValue => {
        fetch(`https://www.omdbapi.com/?s=batman&apikey=a7624ac4`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
            });
    };

    search()

    return (
        <div className="searcher">
            <input type="text"
                onMouseEnter={() => handleHoverOn()}
                onMouseLeave={() => handleHoverOff()}
                onChange={(e) => setTyping(e.target.value)}
                placeholder="Buscar"
            />
            <motion.span animate={animateState()} className="searcher-icon">
                {typing ?
                    <LoaderDots />
                    :
                    <img src={SearchLogo} alt="Search Logo" />
                }
            </motion.span>
        </div>
    )
}

export default Searcher
