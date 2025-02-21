import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div class="App w-screen h-screen bg-red-950">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
