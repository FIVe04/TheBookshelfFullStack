import './App.css';
import HomePage from './routes/HomePage.js'
import LoginPage from './routes/LoginPage.js'
import RegisterPage from './routes/RegisterPage.js';

import { ReactDOM } from 'react-dom';
import { BrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import {Route, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const App = () => {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Outlet/>}>
  //       <Route index element={<HomePage/>} />
  //       <Route path="/login" element={<LoginPage />}/>
  //     </Route>

  //   )
  // )

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      {/* <RouterProvider router={router}/> */}
    </div>
  );
}

export default App;
