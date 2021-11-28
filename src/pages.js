import { Routes, Route } from 'react-router-dom';
import FrontPage from './content/front-page/index';
import PatientSignUp from './content/patientSignup/index';
import MedicSignUp from './content/medic-signup/index'
import Signin from './content/signin/index';

const Pages = () => {
  return (
    <Routes>
      <Route exact path='/' element={<FrontPage />} />
      <Route exact path='/patient-signup' element={<PatientSignUp />} />
      <Route exact path='/medic-signup' element={<MedicSignUp />} />
      <Route exact path='/sign-in' element={<Signin />} />
    </Routes>
  );
};

export default Pages;