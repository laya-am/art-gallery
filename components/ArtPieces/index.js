import React from 'react'
import ArtPiecesPreview from '../ArtPiecesPreview'

export default function ArtPieces({pieces}) {
  console.log(pieces);
  
  return (
    <div>
      <h2>list of all the paintings</h2>
      <ul>
        {pieces?.map((painting) => {
          return (
              <li key={painting.slug}>
                  <ArtPiecesPreview 
                    artist={painting.artist}
                    title={painting.name}
                    image={painting.imageSource}
                    slug={painting.slug}
                  />
              </li>
          )
        })}
      </ul>
    </div>
  )
}