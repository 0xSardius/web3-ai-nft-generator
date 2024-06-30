import { NFT } from "thirdweb";
import React from "react";
import { MediaRenderer } from "thirdweb/react";
import { client } from "../src/app/client";

type NFTCollectionProps = {
  nfts: NFT[];
};

export const NFTCollection = ({ nfts }: NFTCollectionProps) => {
  return (
    <div className="flex flex-col items-center m-5">
      <h3>AI Generations</h3>
      <div className="flex flex-row items-center flex-wrap max-w-screen-sm">
        {nfts && nfts.length > 0
          ? nfts.map((nft) => (
              <div key={nft.id} className="p-[5px] w-[150px] h-[150px]">
                <MediaRenderer
                  client={client}
                  src={nft.metadata.image}
                  className="w-full h-full rounded-[6px]"
                />
              </div>
            ))
          : "No NFTs yet"}
      </div>
    </div>
  );
};
