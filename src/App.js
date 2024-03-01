import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./pages/Create";
// import All5 from "./pages/All5";
import All4 from "./pages/All4";
// import All3 from "./pages/All3";
import All from "./pages/All";
import Error from "./pages/Error";
import Redux from "./pages/Redux";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<All />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="*" element={<Error />} />
          <Route path="/all4" element={<All4 />} />
          {/* <Route path="/update" element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
