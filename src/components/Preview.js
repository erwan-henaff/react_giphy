import React from 'react';

const Preview = props => {

  return (
    <div className="preview">
        <img src={props.previewIndex} alt="kuso2" />    
     </div>
  );
};

export default Preview;