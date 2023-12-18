import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import BackButton from '../../components/BackButton';
import NavigationBar from '../../components/NavigtionBar';
import Logpage from '../../components/Logpage';

const SSignin = () => {
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
        <div className='p-3'>
          <NavigationBar />
          <BackButton />
          <div>
            <h1 style={{fontSize:30, fontFamily:'Figtree, sans-serif'}}>Student Login</h1>
            <Logpage />
          </div>
        </div>
      )}
    </div>
      )};
    </div>
  );
};

export default SSignin;
