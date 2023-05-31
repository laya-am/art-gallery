import React from 'react'
import ArtPiecesPreview from '../ArtPiecesPreview'

export default function ArtPieces({data}) {
  console.log(data);
  return (
    <div>
    <h2>list of all the paintings</h2>
    <ul>
    {data.map((painting) => {
      return(
      <li key={painting.slug}>
      <ArtPiecesPreview artist = { painting.artist } title = { painting.name } image = { painting.imageSource }/> 
      </li>)
    })} 
    </ul>
    </div>
  )
}
