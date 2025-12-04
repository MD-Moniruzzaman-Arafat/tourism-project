import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/common/Footer/Footer';
import Navbar from './components/common/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
