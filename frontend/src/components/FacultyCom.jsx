import React from 'react'
import '../assets/style/admincomstyle.css';
import { FaDownload } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";

const FacultyCom = () => {
  return (
    <div className='Adminblock'>
      <div className='box2'>
        <a href='/Admin/Createform'>
            <FaWpforms size={60} style={{margin:'auto'}}/>
          <h2 style={{fontFamily:'Figtree, sans-serif'}}>Create Form</h2>
        </a>
      </div>
      <div className='box3'>
        <a href='/Admin/Viewresult'>
            <FaDownload size={60} style={{margin:'auto'}}/>
          <h2 style={{fontFamily:'Figtree, sans-serif'}}>View Result</h2>
        </a>
      </div>
    </div>
  )
}

export default FacultyCom