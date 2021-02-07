import React from 'react';
import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div>
            <div className="faceboard">
                <img id="inputImage" src={imageUrl} alt =""></img>
                    <div className = "bounding-box" style={{top: box.topRow, right: box.rightCol,
                    bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;