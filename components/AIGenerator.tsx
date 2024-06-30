"use client";

import { ConnectButton, MediaRenderer, useReadContract } from "thirdweb/react";
import { NFTCollection } from "./NFTCollection";
import { client } from "@/app/client";
import { useState } from "react";
import { getNFTs } from "thirdweb/extensions/erc721";
import { contract } from "../utils/contracts";

export const AIGenerator = () => {
  const [imagePrompt, setImagePrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const { data: nfts, refetch } = useReadContract(getNFTs, {
    contract: contract,
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center m-5">
        <ConnectButton client={client} />
        <div className="m-5">
          {generatedImage ? (
            <MediaRenderer
              client={client}
              src={generatedImage}
              className="w-[300px] h-[300px] rounded-lg"
            />
          ) : (
            <div className="w-[300px] h-[300px] border border-dashed border-[#777] rounded-[10px] flex justify-center items-center">
              <p className="color-[#777]">
                {isGenerating
                  ? "Generating image..."
                  : "Enter a prompt to generate an image"}
              </p>
            </div>
          )}
        </div>
        <div>
          <form>
            {!generatedImage || isMinting ? (
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Enter a question..."
                  value={imagePrompt}
                  onChange={(e) => setImagePrompt(e.target.value)}
                  className="w-[300px] h-[40px] py-0 px-2.5 rounded-[5px] border border-solid border-[#777] mb-2.5"
                />
                <button
                  type="submit"
                  disabled={isGenerating || isMinting || !imagePrompt}
                  className="w-[300px] h=[40px] bg-[#333] text-[#fff] rounded-[5px] border-none cursor-pointer"
                >
                  {isGenerating
                    ? "Generating..."
                    : isMinting
                    ? "Minting..."
                    : "Generate Image"}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setGeneratedImage("")}
                className="w-[300px] h=[40px] bg-[#333] text-[#fff] rounded-[5px] border-none cursor-pointer"
              >
                Generate another NFT
              </button>
            )}
          </form>
        </div>
      </div>
      <NFTCollection nfts={nfts!} />
    </>
  );
};
