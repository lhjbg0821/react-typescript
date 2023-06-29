"use client";

import { MetaMaskSDK } from "@metamask/sdk";
import { FC, useState } from "react";

const Header: FC = () => {
  const [account, setAccount] = useState<string>("");

  const MMSDK = new MetaMaskSDK();
  const ethereum = MMSDK.getProvider();

  const onClickLogIn = async () => {
    try {
      const accounts = await ethereum?.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-green-100 py-4 pr-8 flex justify-end">
      {account ? (
        <div>
          {account.substring(0, 4)}...{account.substring(account.length - 4)}
        </div>
      ) : (
        <button onClick={onClickLogIn}>지갑로그인</button>
      )}
    </div>
  );
};
