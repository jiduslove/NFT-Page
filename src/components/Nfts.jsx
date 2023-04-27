import axios from "axios";
import { useEffect, useState } from "react";
import NftCard from "./NftCard";
import NftCard2 from "./NftCard2";

const Nfts = ({ page, mintedNft, page2, mintedNft2 }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();
  const [selectedPage2, setSelectedPage2] = useState(1);
  const [nfts2, setNfts2] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      setNfts();

      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        nftArray.push({ tokenId, metadata: response.data });
      }

      setNfts(nftArray);
    } catch (error) {
      console.log(error);
    }
  };

  const getNfts2 = async (p) => {
    try {
      let nftArray = [];

      setNfts2();

      for (let i = 0; i < 11; i++) {
        const tokenId2 = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL2}/${tokenId2}.json`
        );

        nftArray.push({ tokenId2, metadata2: response.data });
      }

      setNfts2(nftArray);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);
    getNfts(p);
  };

  const onClickPage2 = (p) => () => {
    setSelectedPage2(p);
    getNfts2(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
          onClick={onClickPage(i + 1)}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }

    return pageArray;
  };

  const pageComp2 = () => {
    let pageArray = [];

    for (let i = 0; i < page2; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage2 ? "text-white" : "text-gray-400"
          }`}
          onClick={onClickPage2(i + 1)}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }

    return pageArray;
  };

  useEffect(() => {
    getNfts(1);
  }, []);

  useEffect(() => {
    getNfts2(1);
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto pt-4">
        <div className="text-5xl font-bold grid grid-cols-3 py-11">
          🩸Series NFT
        </div>
        <div>{pageComp()}</div>
        <ul className="mt-8 grid grid-cols-3 xl:grid-cols-5 justify-items-center gap-8">
          {nfts ? (
            nfts.map((v, i) => {
              return (
                <NftCard
                  key={i}
                  tokenId={v.tokenId}
                  metadata={v.metadata}
                  mintedNft={mintedNft}
                />
              );
            })
          ) : (
            <div>로딩중입니다...</div>
          )}
        </ul>
      </div>
      <div className="max-w-screen-xl mx-auto pt-4">
        <div className="text-5xl font-bold grid grid-cols-3 py-11">
          🩸Special NFT
        </div>
        <div>{pageComp2()}</div>
        <ul className="mt-8 grid grid-cols-3 xl:grid-cols-5 justify-items-center gap-8">
          {nfts2 ? (
            nfts2.map((v, i) => {
              return (
                <NftCard2
                  key={i}
                  tokenId2={v.tokenId2}
                  metadata2={v.metadata2}
                  mintedNft2={mintedNft2}
                />
              );
            })
          ) : (
            <div>로딩중입니다...</div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Nfts;
