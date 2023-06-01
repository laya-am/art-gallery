import React from 'react'
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton"

const StyledImage= styled.img`
width: 300px;`

export default function Spotlight({image, artist, title, slug, onFavs, favPieces}) {
  return (
    <div>
        <FavoriteButton onFavs={onFavs} slug={slug} favPieces={favPieces} />
        <StyledImage
            src={image}
            alt={`Image titled ${title}`}
        ></StyledImage>
        <h2>{title}</h2>
        <p>{artist}</p>
    </div>
  )
}