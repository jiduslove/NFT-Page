import Web3 from "web3";
import Intro from "../components/Intro";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { CONTRACT_ABI2, CONTRACT_ADDRESS2 } from "../web3.config";
import Nfts from "../components/Nfts";
import { useEffect, useState } from "react";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
const contract2 = new web3.eth.Contract(CONTRACT_ABI2, CONTRACT_ADDRESS2);

const Main = ({ account }) => {
  const [totalNft, setTotalNft] = useState(0);
  const [totalNft2, setTotalNft2] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [mintedNft2, setMintedNft2] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);

  const getTotalNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalNft().call();

      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getTotalNft2 = async () => {
    try {
      if (!contract2) return;

      const response = await contract2.methods.totalNft().call();

      setTotalNft2(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setMintedNft(response);
      setPage(parseInt((parseInt(response) - 1) / 10) + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft2 = async () => {
    try {
      if (!contract2) return;

      const response = await contract2.methods.totalSupply().call();

      setMintedNft2(response);
      setPage2(parseInt((parseInt(response) - 1) / 10) + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const getMyNft = async () => {
    try {
      if (!contract || !account) return;

      const response = await contract.methods.balanceOf(account).call();

      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);

  useEffect(() => {
    getTotalNft2();
    getMintedNft2();
  }, []);

  useEffect(() => {
    getMyNft();
  }, [account]);

  return (
    <>
      <Intro
        totalNft={totalNft}
        mintedNft={mintedNft}
        myNft={myNft}
        totalNft2={totalNft2}
      />
      <Nfts
        page={page}
        mintedNft={mintedNft}
        page2={page2}
        mintedNft2={mintedNft2}
      />
    </>
  );
};

export default Main;
