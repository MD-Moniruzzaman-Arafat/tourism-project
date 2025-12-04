import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/common/Footer/Footer';
import Navbar from './components/common/Navbar/Navbar';
import Loading from './components/Loading/Loading';
import useAuth from './hooks/useAuth';

function App() {
  const { loading } = useAuth();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
