import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignInA1 from './pages/SigninA1';
import SignUp from './pages/SignUp';
import SignupA1 from './pages/SignUpA1';

import Profile from 'E:/3rd Year/5th Sem/DBMS/End Sem/mern-auth/client/src/pages/Profile.jsx';
import Details from './pages/Details';
import Details1 from './pages/Details1';
import InsertData from './pages/InsertData';
import InsertData1 from './pages/InsertData1';
import GenerateQR from './pages/GenerateQR';
import ViewData from './pages/ViewData';
import ViewData1 from './pages/ViewData1';
import SearchData from './pages/SearchData';

//additional imports for designing
// import styles from './styles';

export default function App() {
  
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-in-a1' element={<SignInA1 />} />

          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-up-a1' element={<SignupA1 />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/details' element={<Details />} />
          <Route path='/details1/:giTag' element={<Details1 />} />

          <Route path='/insert-data' element={<InsertData />} />
          <Route path='/insert-data1/:giTag' element={<InsertData1 />} />

          <Route path='/generate-qr' element={<GenerateQR />} />
          <Route path='/view-data' element={<ViewData />} />
          <Route path="/viewdata1/:giTag" element={<ViewData1 />} />

          <Route path='/search-data' element={<SearchData />} />


        </Routes>
    </BrowserRouter>
  );
}