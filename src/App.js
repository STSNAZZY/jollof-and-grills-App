
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route Path='/' element={<Shop />}/>
        <Route path='/' element={<}
     
      </Routes>
      
    </> 
  );
}
export default App;
