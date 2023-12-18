import React, {useState, useEffect} from 'react'
import NavigationBar from '../../components/NavigtionBar';
import BackButton from '../../components/BackButton';
import Loader from '../../components/Loader';
import AdminCom from '../../components/AdminCom';
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
          <BackButton destination='/'/>
          <div>
            <h1 style={{fontSize:35,fontFamily: 'ubuntu, sans-serif'}}>Admin Dashboard</h1>
            <h3 style={{textAlign:'center',
                        padding:10,
                        borderRadius:10,
                        margin:10,
                        fontSize:30,
                        fontFamily: 'Figtree, sans-serif'
                      }}
            >Welcome Alien...!</h3>
            <AdminCom />
          </div>
        </div>
      )}
    </div>
  )
}

export default SHome