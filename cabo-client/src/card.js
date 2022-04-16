import React, { useEffect } from 'react'
import { useState } from 'react';
import classnames from 'classnames'
import './card.scss'
import back from './cards/back.svg'
import { socket } from './App.js'

const Card = ({ cardImage, index }) => {
    let [isFlipped, setFlipped] = useState(false);
    const [isSelected, setSelected] = useState(false)


    const handleClick = () => {
        socket.emit("FlipCard", index, socket.id);
        console.log(`emit card flip index: ${index}`);
        setFlipped(!isFlipped); // maybe don't need this here and avoids the workaround
    };

    const handleMouseEnter = event => {
        setSelected(true)
    };

    const handleMouseLeave = event => {
        setSelected(false)
    };

    useEffect(() => {
        socket.on("CardFlipped", rawData => {
            const data = JSON.parse(rawData);
            if (data.clientId === socket.id) {
                // this was the sender
                return;
            }
            if (index === data.cardId) {
                console.log(`card flipped! index: ${data.cardId}`);
                setFlipped(flipped => !flipped);
            }
        });
    }, []);

    return (
        <div
            className={classnames(`card card-${index % 4 + 1}`, {
                "is-flipped": isFlipped,
                "is-highlighted": isSelected
            })}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-face card-front-face">
                <img src={cardImage} alt="card" />
            </div>
            <div className="card-face card-back-face">
                <img src={back} alt="card" />
            </div>
        </div>
    )
}

export default Card;