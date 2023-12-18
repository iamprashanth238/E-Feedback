import React, { useState,useEffect } from 'react'
import NavigationBar from '../../components/NavigtionBar';
import Loader from '../../components/Loader';
import BackButton from '../../components/BackButton';
import { Form } from 'react-router-dom';
import FlexBox from '../../components/FlexBox';

const CreateForm = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavigationBar />
          <BackButton destination='/Admin'/>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: 40, fontFamily:'Figtree, sans-serif'}}>Create Form</h1>
            {/* Form for creating feedback questions and multichoice. And a Add button Floating side to add more questions */}
            <form className='flex'>
              <div className='flex-1'>
                <label className='block'>
                  <span className='text-gray-700'>Title</span>
                  <input
                    className='form-input mt-1 block w-full'
                    placeholder='Add Title'
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      )};
    </div>
  )
}

export default CreateForm