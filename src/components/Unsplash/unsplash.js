import React, { useEffect, useState } from 'react'
import ImageResults from './ImageResults'
import axios from 'axios'
import ImageSearch from './ImageSearch'
import Modal from './Modal'

function Unsplash() {
    const [ imageResults, setImageResults]= useState([])
    const [selectedImage, setSelectedImage] = useState(null);
    const [noResults, setNoResults] = useState(false);
const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const Access=process.env.REACT_APP_MY_ACCESS_KEY
        function getRandomPhotos (){
            axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=random`,{
                headers:{'Authorization':`Client-ID ${process.env.REACT_APP_MY_ACCESS_KEY}`}
            }).then(res => setImageResults(res.data.results))
        }
        getRandomPhotos()
    },[])
  return (
    
    <div>
<ImageSearch setImageResults={setImageResults}
setNoResults={setNoResults}
    setLoading={setLoading}/>
           <ImageResults imageResults={imageResults} setSelectedImage={setSelectedImage} />
           {selectedImage && (
  <Modal
    image={selectedImage}
    onClose={() => setSelectedImage(null)}
  />
)}
{loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}

{noResults && !loading && (
    <h2 style={{ textAlign: "center", color: "gray", marginTop: "20px" }}>
        No results found 😢
    </h2>
)}

    </div>
  )
}

export default Unsplash