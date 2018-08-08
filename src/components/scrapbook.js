import  React from "react";
import './scrapbook.css';
import imageData from './image_data';
import ScrapbookImage from './scrapbook_image';




function Scrapbook(){
    const images = imageData.map((img, index)=>{
        return <ScrapbookImage key={index} about={img}/>
    });

    return (
        <div className="scrapbook-container">
            {/* <ScrapbookImage about={imageData[0]}/> */}
            {images}

        </div>
    )
}
export default Scrapbook;
