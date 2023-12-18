import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SHome from './pages/Students/SHome';
import SSignup from './pages/Students/SSignup';
import SSignin from './pages/Students/SSignin';
import FHome from './pages/Faculties/FHome';
import FCreateForm from './pages/Faculties/FCreateForm';
import FLogin from './pages/Faculties/FLogin';
import FResult from './pages/Faculties/FResult';
import Dashboard from './pages/Admin/Dashboard';
import AddMembers from './pages/Admin/AddMembers';
import CreateForm from './pages/Admin/CreateForm';
import Adminlogin from './pages/Admin/Adminlogin';
import ViewResult from './pages/Admin/ViewResult';
import Student from './pages/Admin/Student';
import Faculty from './pages/Admin/Faculty';
import Anon from './pages/Anonymous/Anon';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Student' element={<SHome />} />
      <Route path='/Student/SignUp' element={<SSignup/>} />
      <Route path='/Student/SignIn' element={<SSignin />} />
      <Route path='/Faculty' element={<FHome />} />
      <Route path='/Faculty/Login' element={<FLogin />} />
      <Route path='/Faculty/Create' element={<FCreateForm />} />
      <Route path='/Faculty/Results' element={<FResult />} />

      <Route path='/Adminlogin' element={<Adminlogin />} />
      <Route path='/Admin' element={<Dashboard />} />
      <Route path='/Admin/Addmember' element={<AddMembers />} />
      <Route path='/Admin/Createform' element={<CreateForm />} />
      <Route path='/Admin/Viewresult' element={<ViewResult />} />
      <Route path='/Admin/AddMember/Student' element={<Student />} />
      <Route path='/Admin/AddMember/Faculty' element={<Faculty />} />
      
      <Route path='/Anonymous' element={<Anon />} />
    </Routes>
  )
}


export default App