import './App.css';
import Crypto from './components/Crypto';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container-fluid">
      <h1 className='text-center'> Crypto - React </h1>  
      <Crypto />
      <Footer/>
    </div>
  );
}

export default App;
