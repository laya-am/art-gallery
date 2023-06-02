import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledParent= styled.ul`
display: flex;
justify-content: space-around;
  background-color: #A7D7C5;
  margin:0;
  padding: 30px;
  position: absolute;
  top:0;
  width: 100vw;
`
const StyledListItem= styled.li`
  list-style-type: none;
  `
  const StyledButton= styled.button`
  &:hover{
    color:red;
  }
border: none;
background-color: transparent;
font-size:30px;
`

export default function Navigation() {
    return (
        <StyledParent>
          <StyledListItem>
            <Link href="/" passHref>
              <StyledButton>
                Spotlight
              </StyledButton>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/art-pieces">
              <StyledButton>
                Gallery
              </StyledButton>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/favorites">
              <StyledButton>
                Favorites
              </StyledButton>
            </Link>
          </StyledListItem>
        </StyledParent>
    );
  }