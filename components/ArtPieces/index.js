import React from 'react'
import ArtPiecesPreview from '../ArtPiecesPreview'
import styled from 'styled-components';

const StyledListItem= styled.li`
  list-style-type: none
  `
const StyledParent= styled.ul`
display: flex;
flex-direction:column;
gap: 100px;
`

export default function ArtPieces({pieces, onFavs, favPieces}) {
  console.log(pieces);


  return (
    <div>
      <h2>list of all the paintings</h2>
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