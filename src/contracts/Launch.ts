import { Contract, ContractProvider, Sender, Address, Cell, contractAddress, beginCell, Slice, Dictionary } from "@ton/core"
import { Stage } from '../types/presaleType';

export default class Launch implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell, data: Cell }) {}

    static createForDeploy(code: Cell, jetton_code: Cell, presale_code: Cell, jetton_wallet_code: Cell): Launch {
      const data = beginCell()
        .storeRef(jetton_code)
        .storeRef(presale_code)
        .storeRef(jetton_wallet_code)
        .endCell();
      const workchain = 0; // deploy to workchain 0
      const address = contractAddress(workchain, { code, data });
      return new Launch(address, { code, data });
    }
    
    async sendDeploy(provider: ContractProvider, via: Sender) {
        await provider.internal(via, {
            value: "0.01", // send 0.01 TON to contract for rent
            bounce: false
        });
    }

    async sendCreateToken(provider: ContractProvider, via: Sender, name: string, ticker: string, logo: string, description: string) {
      const content = beginCell()
        .storeStringTail(name)
        .storeStringTail(ticker)
        .storeStringTail(logo)
        .storeStringTail(description)
      .endCell();
      const messageBody = beginCell()
        .storeUint(0x4fa2e538, 32) // op (op #1 = increment)
        .storeUint(0, 64) // query id
        .storeCoins(0)
        .storeRef(content)
      .endCell(); 
      await provider.internal(via, {
        value: "0.5", // send 0.01 TON to contract for rent
        bounce: true,
        body: messageBody
      });
    }

    // async sendCreatePresale(provider: ContractProvider, via: Sender, startDate: number, endDate: number, owner: string, dest: string, softcup: number, storageFee: number, stages: Stage[], tokenAddr: string) {
    //   const flags = beginCell()
    //     .storeInt(1, 1)
    //     .storeInt(0, 1)
    //     .storeUint(startDate, 32)
    //     .storeUint(endDate, 32)
    //     .storeInt(1, 1)
    //   .endCell();
    //   const balances = beginCell().endCell();
    //   const stages = beginCell()
    //     .d()
    // }
}