import React from 'react';

const ImageBox = props => {

    function passID (e) {
        e.preventDefault();
        let id = props.id;
        props.updateIndex(id);
        console.log("----pass ID--")
        console.log(id);
        console.log("watashi")
    }

  return (
    <div className="imageBox">
        
        <img src={props.url_img} alt="kuso2" onClick ={passID} />

      
    
     </div>
  );
};

//const ImageBox = "bala";

export default ImageBox;
