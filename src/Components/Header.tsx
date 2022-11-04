import React from "react";
import styled from "styled-components";

function Header() {
    const Header = styled.h1`
        text-align: center;
    `;
    return (
        <div>
            <Header>Adventskalender</Header>
        </div>
    )
}

export default Header;