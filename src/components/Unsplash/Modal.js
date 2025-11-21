import React from 'react'
import '../Unsplash/image.css'
function Modal({ image, onClose }) {
  return (
    <div className="overlay">
      <div className="modalBox">
        <button className="closeBtn" onClick={onClose}>X</button>

        <h2 style={{color:'#db2c89ff'}}>Zoomed Preview</h2>

        <img 
          src={image.urls.regular} 
          alt="Selected" 
          style={{ width:"100%", borderRadius:"10px" }}
        />
      </div>
    </div>
  );
}

export default Modal;
