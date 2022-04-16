import './index.css'
import { useEffect,useState } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Login,ErrorPage,Dashboard} from "./pages"
import { Footer } from "./components";
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from './actions/projects';
import { getUsers } from './actions/users';

function App() {
  const selector = useSelector((state)=>state?.auth)
  const first = JSON.parse(localStorage.getItem('profile'))
  const [firstSelector, setfirstSelector] = useState(first)
  const dispatch=useDispatch()
  useEffect(() => {
    setfirstSelector(first)
    dispatch(getProjects())
  }, [selector])
  // useEffect(() => {
  //   dispatch(getUsers())
  // }, [])
  
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