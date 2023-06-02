import React from 'react'
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton"

const StyledImage= styled.img`
width: 70%;`

const StyledParent= styled.div`
display: flex;
flex-direction:column;
align-items: center;
gap: 30px;
position: relative;
`

export default function Spotlight({image, artist, title, slug, onFavs, favPieces}) {
  return (
    <StyledParent>
        <FavoriteButton onFavs={onFavs} slug={slug} favPieces={favPieces} />
        <StyledImage
            src={image}
            alt={`Image titled ${title}`}
        ></StyledImage>
        <h2>{title}</h2>
        <p>{artist}</p>
    </StyledParent>
  )
}