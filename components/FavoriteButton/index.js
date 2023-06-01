import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const StyledButton= styled.button`
border: none;
background-color: transparent;
`

export default function FavoriteButton({onFavs, slug, favPieces}) {
  console.log("favPieces that I want",favPieces);
  const isHearted= favPieces.find(piece => (piece.slug === slug && piece.isFav==true))
  console.log("isHearted",isHearted);
  return (
    <StyledButton onClick={()=>onFavs(slug)} >
      <Image src={isHearted ? "/heart-filled.png": "/heart-outlined.png"} width="50" height="50" alt="icon" />
    </StyledButton>
  )
}
