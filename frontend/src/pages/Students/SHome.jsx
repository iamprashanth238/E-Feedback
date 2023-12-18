import React, {useState, useEffect} from 'react'
import NavigationBar from '../../components/NavigtionBar';
import BackButton from '../../components/BackButton';
import Loader from '../../components/Loader';

const SHome = () => {
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
      ):(
        <div className='p-3'>
          <NavigationBar />
          <BackButton />
          <div>
            <h1 style={{fontSize:35}}>Student Dashboard</h1>
            <p>This is student Dashboard it contain list of feedbacks</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SHome