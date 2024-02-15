import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
  <div className='container'>
    <div>
      <Routes>
        <Route exact path='/' element={<Read/>}></Route>
        <Route exact path='/Create' element={<Create/>}></Route>
        <Route exact path='/update' element={<Update/>}></Route>
      </Routes>
    </div>
    {/* <Create /> */}
   
  </div>

  );
}

export default App;