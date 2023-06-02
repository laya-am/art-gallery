import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const StyledButton= styled.button`
border: none;
background-color: transparent;
position: absolute;
bottom: 90px;
left: 150px;
`

export default function FavoriteButton({onFavs, slug, favPieces}) {
  const isHearted= favPieces.find(piece => (piece.slug === slug && piece.isFav==true))
  return (
    <StyledButton onClick={()=>{
      console.log("favPieces everytime I click:",favPieces)
      return (onFavs(slug)
    )}} >
      <Image src={isHearted ? "/heart-filled.png": "/heart-outlined.png"} width="50" height="50" alt="icon" />
    </StyledButton>
  )
}
