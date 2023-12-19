import React, {useState, useEffect} from 'react'
import NavigationBar from '../../components/NavigtionBar';
import BackButton from '../../components/BackButton';
import Loader from '../../components/Loader';

const Student = () => {
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
          <BackButton destination='/Admin/AddMember'/>
          <div>
            <h1 style={{fontSize:35,fontFamily: 'ubuntu, sans-serif'}}>Add Student</h1>
            
            <div style={{textAlign:'center'}}>
              <form action='#' method='POST'>
                <input type='text' name='name' placeholder='Name' style={{padding:10,margin:10}}/>
                <input type='text' name='rollno' placeholder='Roll No' style={{padding:10,margin:10}}/>
                <input type='email' name='email' placeholder='Email' style={{padding:10,margin:10}}/>
                <input type='password' name='password' placeholder='Password' style={{padding:10,margin:10}}/>
                <input type='submit' value='Add Student' style={{padding:10,margin:10}}/>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Student