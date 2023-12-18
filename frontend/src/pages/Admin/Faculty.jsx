import React, {useState, useEffect} from 'react'
import NavigationBar from '../../components/NavigtionBar';
import BackButton from '../../components/BackButton';
import Loader from '../../components/Loader';

const Faculty = () => {
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
          <BackButton destination='/Admin/AddMember'/>
          <div>
            <h1 style={{fontSize:35,fontFamily: 'ubuntu, sans-serif'}}>Add Faculty</h1>
            
            <div style={{textAlign:'center'}}>
              <form action='#' method='POST'>
                <input type='text' name='name' placeholder='Name' style={{padding:10,margin:10}}/>
                <input type='text' name='pin' placeholder='Pin' style={{padding:10,margin:10}}/>
                <input type='email' name='email' placeholder='Email' style={{padding:10,margin:10}}/>
                <input type='password' name='password' placeholder='Password' style={{padding:10,margin:10}}/>
                <input type='submit' value='Add Faculty' style={{padding:10,margin:10}}/>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Faculty