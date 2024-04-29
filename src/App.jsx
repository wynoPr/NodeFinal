import { BrowserRouter, Route, Routes } from "react-router-dom";
import P1 from "./pages/P1/P1";
import P2 from "./pages/P2/P2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Front />} /> */}
          <Route path="/languages" element={<P1 />} />
          <Route path="/languages/:id" element={<P2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
