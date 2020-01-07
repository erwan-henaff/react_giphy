import React from 'react';

const ImageBox = props => {

    function passID (e) {
        e.preventDefault();
        let new_url = props.url_img;
        props.updateIndex(new_url);
    }

  return (
    <div className="imageBox">
        <img src={props.url_img} alt="kuso2" onClick ={passID} />    
    </div>
  );
};

export default ImageBox;
