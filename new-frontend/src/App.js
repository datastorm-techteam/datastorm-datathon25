import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div class="App w-screen">
      <div class="bg-red-950">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="blogs" element={<Blogs />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
