
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';

const App  = () => {
    return (
    <div className='max-x-7x1 mx-auto'>
      <Header />
       
      <Home />
      <Contact />
    </div>
  );
};

export default App;
