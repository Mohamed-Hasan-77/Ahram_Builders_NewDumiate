import Err from "./assets/Erro-404-1-1.jpg"


// react router 
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// components 
import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar.jsx";

// i18 next 
import "./i18n";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";


import "./index.css"


const router = createBrowserRouter([

  { element: <Home />, path: '' },
  { element: <Home />, path: '/' },
  { element: <Home />, path: '/mealPlan/' },
  { element: <Home />, path: 'home' },


  {
    path: "*",
    element: <>
      <Navbar />
      <div className="img w-full ">
        <img
          className="object-cover "
          src={Err}
          alt="not found"
        />
      </div>
      {/* <Footer /> */}
    </>,
  },
])


function App() {

  return (
    <>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </>
  )
}

export default App
