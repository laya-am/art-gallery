import React from 'react'
import styled from "styled-components"
import Link from "next/link"

const StyledImage= styled.img`
width: 300px;`


export default function ArtPiecesPreview({artist, title, image, slug }) {

  return (
    <div>
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
