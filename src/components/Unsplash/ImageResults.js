import React from 'react'

function ImageResults({imageResults,setSelectedImage}) {
  return (
    <div className="image-results" >
{imageResults.map((result,idx) => <div className="image-card" key={result.id || idx}  onClick={()=> setSelectedImage(result)}>
    <img className='result-image' src={result.urls.small}></img>
</div>)}
    </div>
  )
}

export default ImageResults