import React, {useState, useEffect} from 'react'
import NavigationBar from '../../components/NavigtionBar';
import BackButton from '../../components/BackButton';
import Loader from '../../components/Loader';
import FacultyCom from '../../components/FacultyCom';

const FHome = () => {
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
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <NavigationBar />
          <BackButton />
          <div>
            <h1 style={{fontSize:35, fontFamily:'Figtree, sans-serif'}}>Faculty Dashboard</h1>
            <FacultyCom />
          </div>
        </div>
      )}
    </div>
  )
}

export default FHome