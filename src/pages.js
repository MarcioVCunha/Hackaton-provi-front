import { Routes, Route } from 'react-router-dom';
import FrontPage from './content/front-page/index';
import PatientSignUp from './content/patientSignup/index';
import MedicSignUp from './content/medic-signup/index'
import Signin from './content/signin/index';
import Homepage from './content/homepage/index';
import CreateMedicPage from './content/create-medic-page';
import MyPage from './content/my-page';

const Pages = () => {
  return (
    <Routes>
      <Route exact path='/' element={<FrontPage />} />
      <Route exact path='/patient-signup' element={<PatientSignUp />} />
      <Route exact path='/medic-signup' element={<MedicSignUp />} />
      <Route exact path='/sign-in' element={<Signin />} />
      <Route exact path='/homepage' element={<Homepage />} />
      <Route exact path='/homepage-medico/:id' element={<CreateMedicPage />} />
      <Route exact path='/my-page' element={<MyPage />} />
    </Routes>
  );
};

export default Pages;