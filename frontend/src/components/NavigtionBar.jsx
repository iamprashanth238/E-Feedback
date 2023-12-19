import React from 'react'
import anurag_logo from '../assets/images/anurag_logo.png';


const NavigationBar = () => {
  return (
    <div className='bg-blue-200 text-black w-100' style={{padding:15, textAlign:'center', fontSize:30, fontFamily:'georgia'}}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <a href='/'><img src={anurag_logo} className='w-20' style={{width:150}}/></a>
    </div>
  )
}

export default NavigationBar