import React from "react";
// import axios from "axios";


function ImageLoad(cell) {
    if(!cell) {
        return 'None'
    }
    const data = Object.values(cell);

    var bytes, blob, url;
    bytes = new Uint8Array(data[1]);
    blob = new Blob([bytes], {type:'image/bmp'});
    url = URL.createObjectURL(blob);

    // console.log(url);

    return <img src={url} alt="X"/>
}

export default ImageLoad;