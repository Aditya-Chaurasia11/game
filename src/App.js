import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import abi from "./abi.json";
// import Match from "./Pages/Match";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import HeadOrTail from "./Pages/Toss/HeadOrTail";
import CoinRotate from "./Pages/Toss/CoinRotate";
import  MatchHome  from "./Pages/Match/MatchHome";

function App() {
  // const [account, setAccount] = useState("");
  // const [contract, setContract] = useState(null);
  // const [provider, setProvider] = useState(null);

  // useEffect(() => {
  //   try {
  //     const provider = new ethers.BrowserProvider(window.ethereum);

  //     const loadProvider = async () => {
  //       if (provider) {
  //         window.ethereum.on("chainChanged", () => {
  //           // Chain has changed, so reload the page
  //           window.location.reload();
  //         });

  //         window.ethereum.on("accountsChanged", () => {
  //           // Accounts have changed, so reload the page
  //           window.location.reload();
  //         });

  //         await provider.send("eth_requestAccounts");
  //         const signer = await provider.getSigner();
  //         const address = await signer.getAddress();

  //         setAccount(address);
  //         let contractAddress = "0xB09258DFAD9767Cd7Ff5b60Db9c06Ef801A91117";
  //         // let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  //         const contract = new ethers.Contract(contractAddress, abi, signer);

  //         console.log(contract);
  //         setContract(contract);
  //         setProvider(provider);
  //       } else {
  //         alert("Metamask not installed");
  //       }
  //     };
  //     provider && loadProvider();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // const get = async () => {
  //   try {
  //     const res = await contract.BOBTurn();
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   get();
  // }, []);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>
        <Route
          element={
            <>
              <div className="gradient__bg">
                <Navbar />
              </div>
              <Home />
            </>
          }
          path="/"
          exact
        />

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/toss" element={<HeadOrTail />} />
        <Route path="/match" element={<MatchHome />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
