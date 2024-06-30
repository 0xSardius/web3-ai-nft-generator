import Image from "next/image";
import { ConnectButton, ConnectEmbed } from "thirdweb/react";
import { client } from "./client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h1>AI Image Generator</h1>
      <ConnectEmbed client={client} />
    </div>
  );
}
