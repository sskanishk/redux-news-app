import React from 'react'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar';
import './assets/css/main.css';
import { selectSignedIn } from './features/userSlices';
import { useSelector } from 'react-redux';
import News from './Components/News';


const App = () => {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn && <News />}
    </div>
  )
}

export default App;
