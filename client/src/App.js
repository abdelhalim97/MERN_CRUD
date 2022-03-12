import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Login,ErrorPage,Dashboard} from "./pages"
import { Footer } from "./components";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const first=true
// const dispatch=useDispatch()
// useEffect(() => {
//   dispatch(get)
// }, [third])

function App() {
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