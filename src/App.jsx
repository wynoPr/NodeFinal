import { BrowserRouter, Route, Routes } from "react-router-dom";
import P1 from "./pages/P1/P1";
import P2 from "./pages/P2/P2";
import P3 from "./pages/P3/P3";
import Front from "./pages/front/Front";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/languages" element={<P1 dataType="language" />} />
          <Route path="/languages/:id" element={<P2 dataType="language" />} />
          <Route path="/families" element={<P1 dataType="families" />} />
          <Route path="/families/:id" element={<P2 dataType="families" />} />
          <Route path="/timeline" element={<P3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
