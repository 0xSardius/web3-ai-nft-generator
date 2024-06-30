import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";

export const AIGenerator = () => {
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <ConnectButton client={client} />
    </div>
  );
};
