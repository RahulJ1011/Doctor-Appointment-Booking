
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserSignup from './pages/UserSignup';
import PatLogin from './pages/PatLogin';
import Doctlogin from './pages/Doctlogin';
import WelcomePage from './pages/WelcomePage';
import Notifications from './pages/Notifications';
import Appoint from './pages/Appoint';
import Appointment from './components/appoint/Appointment';
import PatientHistory from './pages/PatientHistory';



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/'element={<UserSignup />} exact />
      <Route path='/patlogin' element={<PatLogin />} />
      <Route path='/doclogin' element={<Doctlogin />} />
      <Route path='/welcome' element={<WelcomePage />} />
      <Route path='/notifications' element={<Notifications />} />
      <Route path='/appointment' element={<Appoint />} />
      <Route path='/appointment/:id' element={<Appointment />} />
      <Route path='/history' element={<PatientHistory />} />
     </Routes>
    </div>
  );
}

export default App;
