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
    dispatch(getUsers())
  }, [selector])

  return (
      <BrowserRouter>
        <div className="flex flex-col justify-between" style={{minHeight:'100vh'}}>
      {first&&<Dashboard/>}
        <Routes>
          {!first &&
            (<Route path="/" element={<Login/>}/>)
          }
          {!first &&<Route path="*" element={<ErrorPage/>}/>}
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;