import React from "react";
import styled from 'styled-components';
import { cards } from "../cardData";
import Card from "./Card";

function Kalender() {
    const Container = styled.div`
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, 1fr);
    `;

    const cardIrems = cards.map(card => <Card key={card.id} day={card.day} quote={card.quote} meaning={card.meaning} />);
    return(
        <Container>
            {cardIrems}
        </Container>
    );
}

export default Kalender;