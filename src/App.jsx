import { BrowserRouter, Route, Routes } from "react-router-dom";
import P1 from "./pages/P1/P1";
import P3 from "./pages/P3/P3";
import Front from "./pages/front/Front";
import P2langinfo from "./pages/P2langinfo/P2langinfo";
import P2faminfo from "./pages/P2faminfo/P2faminfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/languages" element={<P1 dataType="language" />} />
          <Route path="/families" element={<P1 dataType="families" />} />
          <Route path="/language/:id" element={<P2langinfo dataType="language"  />} />
          <Route path="/families/:id" element={<P2faminfo dataType="families"  />} />
          <Route path="/timeline" element={<P3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
