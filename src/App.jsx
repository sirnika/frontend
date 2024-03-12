
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import  AppRoutes  from './Routes/AppRoutes';

const App = () => {
  return (
  <>
  <ToastContainer position="bottom-right"/>
  <AppRoutes/>
  </>
  );
}

export default App
