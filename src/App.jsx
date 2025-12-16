import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./component/layout/AppLayout";
import Home from "./page/Home";
// import "./index.css";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<p>Hello</p>} />
          <Route path="/new" element={<p>Hello again</p>} />
          <Route path="/old" element={<p>Hello a</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
