import React from 'react';
import styled from 'styled-components';

function Footer() {
    const Footer = styled.div`
        text-align: center;
        margin: 20px;
    `;
    return (
        <Footer>
            <span>Content from </span>
            <a href="https://www.schreiben.net/">screiben.net</a>
        </Footer>
    );
}

export default Footer;