

import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to our blog";
  const link = "http://www.google.com"
  return (
   <div className='App'>
    <Navbar></Navbar>
    <div className='content'>
     <Home/>
    </div>
   </div> 
  );
}

export default App;
