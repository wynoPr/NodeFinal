import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from 'react'
import P1 from "./pages/P1/P1";
import P3 from "./pages/P3/P3";
import Front from "./pages/front/Front";
import P2langinfo from "./pages/P2langinfo/P2langinfo";
import P2faminfo from "./pages/P2faminfo/P2faminfo";

export const GlobalContext = React.createContext();

function App() {

  const path = window.location.pathname;

  const [find, finder] = useState();

  return (
    <>
      <BrowserRouter>
      <GlobalContext.Provider value={{ find, finder }}>

      {/* {!(path.includes('/esp') || path.includes('/en')) && <Navigate to="/en" />} */}

        <Routes> 

          <Route path="/en" element={<Front />} />
          <Route path="/en/languages" element={<P1 dataType="language"/>} />
          <Route path="/en/families" element={<P1 dataType="families" />} />
          <Route path="/en/language/:id" element={<P2langinfo dataType="language" />} />
          <Route path="/en/families/:id" element={<P2faminfo dataType="families" />} />
          <Route path="/en/timeline" element={<P3  />} />

          <Route path="/esp/" element={<Front />} />
          <Route path="/esp/languages" element={<P1 dataType="language" />} />
          <Route path="/esp/families" element={<P1 dataType="families" />} />
          <Route path="/esp/language/:id" element={<P2langinfo dataType="language"  />} />
          <Route path="/esp/families/:id" element={<P2faminfo dataType="families" />} />
          <Route path="/esp/timeline" element={<P3 />} />

          <Route path="*" element={<Navigate to="/en" />} />

        </Routes>
      </GlobalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
