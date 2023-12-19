import React, { useState, useEffect } from 'react'
import NavigationBar from '../../components/NavigtionBar';
import Loader from '../../components/Loader';
import BackButton from '../../components/BackButton';
import { PiStudentFill } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const AddMembers = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='p-2'>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <NavigationBar />
          <BackButton destination='/Admin'/>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: 40, fontFamily:'Figtree, sans-serif'}}>Add Members</h1>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '40vh',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '60%',
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  backgroundColor: '#B0C4DE',
                  margin: 4, fontFamily: 'Figtree, sans-serif', fontSize:25
                }}
              >
                <a href='/Admin/AddMember/Student'>
                  <PiStudentFill size={60} style={{margin:'auto'}}/>
                  <h2>Students</h2>
                </a>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  backgroundColor: '#B0C4DE',
                  margin: 4, fontFamily: 'Figtree, sans-serif', fontSize:25
                }}
              >
                <a href='/Admin/AddMember/Faculty'>
                  <LiaChalkboardTeacherSolid size={60} style={{margin:'auto'}}/>
                  <h2>Faculty</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddMembers