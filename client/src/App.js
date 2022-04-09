import './index.css'
import { useEffect,useState } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Login,ErrorPage,Dashboard} from "./pages"
import { Footer } from "./components";
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from './actions/projects';

function App() {
  const first=useSelector((state)=>state?.auth)
  const [firstSelector, setfirstSelector] = useState(useSelector((state)=>state?.auth))
  const dispatch=useDispatch()
  useEffect(() => {
    setfirstSelector(first)
    dispatch(getProjects())
  }, [dispatch])
  // console.log(first)
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