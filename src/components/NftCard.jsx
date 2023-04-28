import { GrGoogleWallet } from "react-icons/gr";
import { MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  return (
    <div className="relative rounded-2xl bg-gray-800 pb-4">
      {parseInt(mintedNft) < tokenId && (
        <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-2xl flex justify-center items-center text-4xl font-bold">
          Not Minted.
        </div>
      )}
      <img className="rounded-t-2xl" src={metadata.image} alt={metadata.name} />
      <div className="mt-4 text-ml flex items-center px-4 text-gray-300">
        Series by Dio
        <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-2 text-gray-950">
          <GrGoogleWallet size={16} />
        </div>
      </div>
      <div className="mt-2 text-l font-bold px-4">Emotion # {tokenId}</div>
      <div className="mt-4 text-xl flex justify-end px-4">
        <Link to={`/${tokenId}`}>
          <button
            disabled={parseInt(mintedNft) < tokenId}
            className="bg-gray-50 text-gray-950 mt-6 px-4 py-2 rounded-xl hover:bg-main"
          >
            <MdDescription size={26} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NftCard;
