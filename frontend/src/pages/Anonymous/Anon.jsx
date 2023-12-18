import React, { useState, useEffect } from 'react'
import Loader from '../../components/Loader';
import BackButton from '../../components/BackButton';
import NavigationBar from '../../components/NavigtionBar';
import qr_code from '../../assets/images/qr_code.png';
const Anon = () => {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      
      {isLoading ? (
        <Loader />
      ) : (
        <div>
      {isLoading ? (
        <Loader />
      ) : (
        
        <div className='p-3' style={{textAlign:'center'}}>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <NavigationBar />
          <BackButton />
          <h1 style={{textAlign:'center', fontFamily:'Figtree, sans-serif', fontSize:30, fontStyle:'bold'}}>Anonymous</h1>
          <p>Scan the below QR code to Submit Your Review</p>
          <div className='flex' style={{justifyContent:'center', padding:20}}>
            <img src={qr_code} alt='QRcode' style={{width:200, height:200}}/>
          </div>
          
        </div>
      )}
    </div>
      )}
    </div>
  );
}

export default Anon