"use client";

import { Avatar, Name } from "@coinbase/onchainkit/identity";
import { ConnectAccount } from "@coinbase/onchainkit/wallet";
import Link from "next/link";
import { useAccount } from "wagmi";

export function TopBar(): JSX.Element {
  const account = useAccount();
  return (
    <div className="h-12 flex justify-between px-12">
      <nav>
        <ul className="h-full flex items-center space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Market</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        {account.status === "connected" ? (
          <div className="flex items-center space-x-4">
            <Avatar address={account.address} showAttestation />
            <div className="flex flex-col text-sm">
              <Name address={account.address} />
            </div>
          </div>
        ) : (
          <ConnectAccount />
        )}
      </div>
    </div>
  );
}
