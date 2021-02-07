import React from 'react';
import "./ImageLinkForm.css"

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return(
        <div>
           <p>{"This Magic brain will detect faces in your picture. Give it a try"}"</p>
        <div>
            <input type ='text' onChange = {onInputChange}></input>
            <button  onClick={onSubmit} >Detect</button>
        </div>
        </div>
    )
}

export default ImageLinkForm;