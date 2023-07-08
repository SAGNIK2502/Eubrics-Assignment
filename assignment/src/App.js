
import './App.css';
import Navbar from './components/navbar';
import Button from './components/button';
import Communication from './components/communication';
import Health from './components/Health';
import Programming from './components/programming';
import Sports from './components/Sports';
import College from './components/college';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/Health" element={<Health/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Communication" element={<Communication/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Programming" element={<Programming/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Sports" element={<Sports/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/College" element={<College/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Button todo="Health" heading="Health"/>}>

        </Route>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Button todo="Communication skills" heading="Communication skills" />}>

        </Route>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Button todo="Programming skills" heading="Programming skills"/>}>

        </Route>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Button todo="Sports skills" heading="Sports skills" />}>

        </Route>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Button todo="College" heading="College" />}>

        </Route>
      </Routes>
      
      </>
  );
}

export default App;
