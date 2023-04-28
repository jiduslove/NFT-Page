import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import { useState } from "react";
import Detail2 from "./pages/detail2";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [account, setAccount] = useState("");

  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
}

export default App;
