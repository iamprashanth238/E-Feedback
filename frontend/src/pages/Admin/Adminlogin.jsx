import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import BackButton from '../../components/BackButton';
import NavigationBar from '../../components/NavigtionBar';
import Logform from '../../components/Logpage';

const Adminlogin = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      {isLoading ? (
        <Loader />
      ):(
        <div className='p-3'>
          <NavigationBar />
          <BackButton />
          <div>
            <Logform />
          </div>
        </div>
      )}
    </div>
  );
};

export default Adminlogin;
