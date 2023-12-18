import React from 'react';
import '../assets/style/admincomstyle.css';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";

const AdminCom = () => {
  return (
    <div className='Adminblock'>
      <div className='box1'>
        <a href='/Admin/Addmember'>
            <IoIosAddCircleOutline size={60} style={{margin:'auto'}}/>    
            <h2 style={{fontFamily:'Figtree, sans-serif'}}>Add Member</h2>
        </a>
      </div>
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
  );
};

export default AdminCom;
