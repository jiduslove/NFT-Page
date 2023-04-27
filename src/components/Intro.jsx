import { GrGoogleWallet } from "react-icons/gr";
import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 34) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft, totalNft2 }) => {
  return (
    <div className="bg-gradient-to-b from-transparent to-white via-black pt-10 ">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-9xl truncate opacity-40 pointer-events-none">
          Dio's
        </div>
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="NFT"
          />

          <div className="w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Dio's Art gallery
          <div className="bg-yellow-300 w-6 h-6 rounded-full flex justify-center items-center ml-4 text-gray-950">
            <GrGoogleWallet size={16} />
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-yellow-300 ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-gray-300">
          블체스 과정중에 쌓이는 어려움과 스트레스를 해소하기 위해 만들어진
          gallery 공간입니다.
        </div>
        <div className="py-4 text-center flex ">
          <div>
            <div className="font-bold">{totalNft}</div>
            <div className="text-gray-600">Series NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{totalNft2}</div>
            <div className="text-gray-600">Special NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNft}</div>
            <div className="text-gray-600">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNft}</div>
            <div className="text-gray-600">내 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">-</div>
            <div className="text-gray-600">ETH 최저가</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">-</div>
            <div className="text-gray-600">ETH 총 거래량</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">-</div>
            <div className="text-gray-600">USDC 최저가</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">-</div>
            <div className="text-gray-600">USDC 총 거래량</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

<img
  class="h-20 lg:h-[180px] w-20 lg:w-[180px] rounded-full object-cover"
  src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x8e49127663ab3cb992c2eba9add5ec745055ca86.gif"
  alt="test"
></img>;
