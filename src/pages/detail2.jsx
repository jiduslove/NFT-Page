import axios from "axios";
import { useEffect, useState } from "react";
import { GrGoogleWallet } from "react-icons/gr";
import { TbFileDescription } from "react-icons/tb";
import { useParams } from "react-router-dom";
import Modals from "../components/Modals";

const Detail2 = () => {
  const [metadata, setMetadata] = useState();
  const [suggestion, setSuggestion] = useState([]);
  const { tokenId } = useParams();

  const getNft2 = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL2}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft2();
  }, []);

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center py-16 bg-gray-900">
      {metadata ? (
        <>
          <div className="max-w-[512px]">
            <img className="rounded-t-2xl" src={metadata.image} alt="NFT" />
            <ul className="grid grid-cols-4 gap-8 py-8 bg-gray-600 rounded-b-2xl text-center">
              {metadata.attributes.map((v, i) => {
                return (
                  <li key={i} className="mx-4">
                    <div>{v.trait_type}</div>
                    <div className="mt-1 border-t-2 font-bold">{v.value}</div>
                  </li>
                );
              })}
            </ul>
            <div className="flex mt-4">
              {/* <button
                className="mr-2 text-textPrimary h-[52px] text-base w-full rounded-2xl font-medium cursor-pointer leading-normal shadow-sm  bg-gray-700 hover:bg-yellow-400 "
                type="button"
              >
                제안하기
              </button> */}
              <Modals suggestion={suggestion} setSuggestion={setSuggestion} />
              <button
                className="h-[52px] text-base w-full rounded-2xl font-medium cursor-pointer leading-normal shadow-sm   bg-gray-700 hover:bg-yellow-400 "
                type="button"
              >
                구매하기
              </button>
            </div>
          </div>
          <div className="m-8">
            <div className="text-4xl flex items-center">
              <div>{metadata.name}</div>
              <div className="bg-yellow-300 w-8 h-8 rounded-full flex justify-center items-center ml-2 text-gray-950">
                <GrGoogleWallet size={18} />
              </div>
            </div>
            <div className="mt-8 text-2xl">D.C - {metadata.description}</div>
            <div class="px-4 lg:py-6 lg:px-5 py-5 lg:border-borderQuarternary lg:border-solid lg:border-[1px] rounded-[20px] min-h-[480px] mt-[32px]">
              <div class="flex gap-x-[8px] font-semibold text-lg items-center mb-4">
                <div>
                  <TbFileDescription size={24} />
                </div>
                <div>제안 현황</div>
              </div>
              <div class="h-[520px] overflow-auto md:mt-4">
                {suggestion.length === 0 ? (
                  <div class="mt-[80px] text-center text-textQuarternary">
                    받은 제안이 없어요
                  </div>
                ) : (
                  <div class="mt-[80px] text-center text-textQuarternary">
                    {suggestion.map((v, i) => (
                      <li key={i}>{v}</li>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>로딩중입니다...</div>
      )}
    </div>
  );
};

export default Detail2;
