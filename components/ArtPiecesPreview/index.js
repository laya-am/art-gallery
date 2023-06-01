import React from 'react'
import styled from "styled-components"

const StyledImage= styled.img`
width: 300px;`


export default function ArtPiecesPreview({artist, title, image }) {

  return (
    <div>
      <StyledImage 
        className="painting" 
        src={image} 
        alt={`Image titled ${title}`}>
      </StyledImage>
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  )
}
