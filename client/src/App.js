import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Login,ErrorPage,Dashboard} from "./pages"
import { Footer } from "./components";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProjects } from './actions/projects';

function App() {
  const first=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])
  return (
      <BrowserRouter>
      {first&&<Dashboard/>}
        <Routes>
          {!first &&
            (<Route path="/" element={<Login/>}></Route>)
          }
          {!first &&<Route path="*" element={<ErrorPage/>}></Route>}
        </Routes>
        {!first &&<div style={{ height:'53vh' }}></div>}
        <Footer/>
      </BrowserRouter>
  );
}

export default App;