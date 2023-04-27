import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import { useState } from "react";
import Detail2 from "./pages/detail2";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
          <Route path="/a/:tokenId" element={<Detail2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
