import React from 'react'
import styled from "styled-components"
import Link from "next/link"
import FavoriteButton from '../FavoriteButton';
const StyledImage= styled.img`
width: 300px;`


export default function ArtPiecesPreview({artist, title, image, slug, onFavs, favPieces }) {

  return (
    <div>
      <FavoriteButton onFavs={onFavs} slug={slug} favPieces={favPieces}/>
      <Link href={`/art-pieces/${slug}`}>
      <StyledImage
        className="painting"
        src={image}
        alt={`Image titled ${title}`}>
      </StyledImage>
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  )
}
