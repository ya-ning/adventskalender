import React, { useState } from "react";
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

interface CardProps {
    day: number;
    quote: string;
    meaning: string;
}

function Card(props: CardProps) {
    const Div = styled.div`
        border: 1px solid white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        height: 10rem;
        background-color: rgba(255, 255, 255, .5);
        cursor: pointer;
    `;
    const FrontDay = styled.div`
        font-size: 5rem;
    `;
    const Quote = styled.div`
        font-style: italic;
    `;
    const Meaning = styled.div`
        font-size: 12px;
        margin-top: auto;
    `;

    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* card front */}
            <Div onClick={handleClick}>
                <FrontDay>{props.day}</FrontDay>
            </Div>

            {/* card back */}
            <Div onClick={handleClick}>
                <div>{props.day}</div>
                <Quote>{props.quote}</Quote>
                <Meaning>{props.meaning}</Meaning>
            </Div>
        </ReactCardFlip>
    );
}

export default Card;