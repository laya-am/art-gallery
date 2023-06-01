import React from 'react'
import styled from "styled-components"

const StyledImage= styled.img`
width: 300px;`

export default function Spotlight({image, artist, title}) {

  return (
    <div style={{position: "absolute", top: "0", right: "0"}}>
        <StyledImage src={image} alt={`Image titled ${title}`}></StyledImage>
        <h2>{title}</h2>
        <p>{artist}</p>
    </div>
  )
}