import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';


const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = () => {
      
      const image1 = new Image();
      image1.src = 'frontend/src/assets/images/positive-review.png'; 

      const image2 = new Image();
      image2.src = 'frontend/src/assets/images/review (1).png'; 

      const image3 = new Image();
      image3.src = 'frontend/src/assets/images/review.png'; 

      
      Promise.all([image1, image2, image3].map((img) => img.decode())).then(() => {
        setLoading(false);
      });
    };

    loadImage();
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red; 
  `;

  return (
    <div className="loader-container " style={{display:'flex', justifyContent:'center', padding:120}}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <RingLoader css={override} size={150} color={'#36D7B7'} loading={loading} />
      {!loading && (
        <div>
          
          <img src="frontend/src/assets/images/positive-review.png" alt="Image 1" />
          <img src="frontend/src/assets/images/review (1).png" alt="Image 2" />
          <img src="frontend/src/assets/images/review.png" alt="Image 3" />
        </div>
      )}
    </div>
  );
};

export default Loader;
