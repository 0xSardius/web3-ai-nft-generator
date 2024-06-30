import { client } from "../src/app/client";
import { getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

const nftCollectionContractAddress =
  "0xB6468b7Ccf512445833fe3BB6013bbcC358C7eB4";

export const contract = getContract({
  client: client,
  chain: baseSepolia,
  address: nftCollectionContractAddress,
});
