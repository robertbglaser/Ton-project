import { useEffect, useState } from 'react';
import Launch from '../contracts/Launch';
import { useTonClient } from './useTonClient';
import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonConnect } from './useTonConnect';
import { Address, OpenedContract } from '@ton/core';
import { chainsConfig } from '../config';
import { useReactiveVar } from '@apollo/client';
import { tokenVar, presaleVar, lpVar } from '../graphql/variables/Shared';

export function useLaunchContract() {
  const client = useTonClient();
  const { sender } = useTonConnect();
  const tokenSetting = useReactiveVar(tokenVar);
  const presaleSetting = useReactiveVar(presaleVar);
  const lpSetting = useReactiveVar(lpVar);

  const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

  const launchContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new Launch(
      Address.parse(chainsConfig[0].contractAddress)
    );
    return client.open(contract) as OpenedContract<Launch>;
  }, [client]);

  useEffect(() => {
    
  }, [launchContract]);

  return {
    address: launchContract?.address.toString(),
    createToken: ()=>{
      return launchContract?.sendCreateToken(sender, tokenSetting.name, tokenSetting.ticker, tokenSetting.logo, tokenSetting.description );
    }
  };
}