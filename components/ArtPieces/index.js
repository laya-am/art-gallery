import React from 'react'
import ArtPiecesPreview from '../ArtPiecesPreview'
import styled from 'styled-components';

const StyledHeading= styled.h1`
  text-align: center;
  margin: 100px
  `
const StyledListItem= styled.div`
  list-style-type: none
  `
const StyledParent= styled.div`
display: flex;
flex-direction:column;
gap: 100px;
margin: 100px 0;

`

export default function ArtPieces({pieces, onFavs, favPieces}) {
  console.log(pieces);


  return (
    <div style={{marginTop: "200px"}}>
      {/* <StyledHeading>Gallery</StyledHeading> */}
      <StyledParent>
        {pieces?.map((painting) => {
          return (
              <StyledListItem key={painting.slug}>
                  <ArtPiecesPreview 
                    artist={painting.artist}
                    title={painting.name}
                    image={painting.imageSource}
                    slug={painting.slug}
                    onFavs={onFavs}
                    favPieces={favPieces}
                  />
              </StyledListItem>
          )
        })}
      </StyledParent>
    </div>
  )
}