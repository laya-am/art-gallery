import styled from "styled-components";
import React from 'react'

const StyledParent= styled.div`
position: absolute;
text-align:center;
  background-color: #A7D7C5;
  margin:0;
  padding: 30px;
  bottom: 0;
  width: 100vw;

`

export default function Footer() {
  return (
    <StyledParent>
    <p>Powered by matthias, Joanna and Laya</p>
    <p>copyright © 2023</p>
    </StyledParent>
  )
}
