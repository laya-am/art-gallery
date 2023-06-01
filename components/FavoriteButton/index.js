import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const StyledButton= styled.button`
border: none;
${'' /* background-color: transparent; */}
&:focus{
${'' /* background-color: red; */}
}`

export default function FavoriteButton({onFavs, slug}) {
  return (
    <StyledButton onClick={()=>onFavs(slug)} >
      <Image src="/heart.svg" width="50" height="50" alt="icon" />
    </StyledButton>
  )
}
