import React from 'react'
import styled from "styled-components"
import Link from "next/link"
import FavoriteButton from '../FavoriteButton';

const StyledImage= styled.img`
width: 70%;`

const StyledParent= styled.div`
display: flex;
flex-direction:column;
align-items: center;
gap: 30px;
position: relative;
`


export default function ArtPiecesPreview({artist, title, image, slug, onFavs, favPieces }) {

  return (
    <StyledParent>
      <Link style={{display:"flex", justifyContent:"center"}} href={`/art-pieces/${slug}`}>
      <StyledImage
        className="painting"
        src={image}
        alt={`Image titled ${title}`}>
      </StyledImage>
      </Link>
      <FavoriteButton onFavs={onFavs} slug={slug} favPieces={favPieces}/>
      <h2>{title}</h2>
      <p>{artist}</p>
    </StyledParent>
  )
}
