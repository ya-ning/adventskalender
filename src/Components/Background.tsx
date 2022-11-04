import React from 'react';
import styled from 'styled-components';
// import backgroundVideo from '../img/bg.mp4';
import backgroundImage from '../img/bg.jpeg';

function Background() {
    const Image = styled.img`
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.7;
    `;
    return (
        // <Video autoPlay loop muted>
        //     <source src={backgroundVideo} type="video/mp4" />
        // </Video>
        <Image src={backgroundImage} />
    )
}

export default Background;