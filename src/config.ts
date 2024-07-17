export interface ChainConfig {
  id: number
  name: string
  networkTokenSymbol: string
  ScanAddress: string
  contractAddress: string
}

export const chainsConfig: ChainConfig[] = [
  {
    id: 1,
    ScanAddress: 'https://testnet.tonscan.org/',
    name: 'Ton testnet',
    networkTokenSymbol: 'Ton',
    contractAddress: 'EQB0t4PofTpAtbvS2u6zEfSkTkeHeKJfjQHUpxxJkdSLiHD5'
  },
  {
    id: 5,
    ScanAddress: 'https://tonscan.org/',
    name: 'Ton mainnet',
    networkTokenSymbol: 'Ton',
    contractAddress: '0xB6B43c4b6d06d797eECa5e1b9eE481186051fad2'
  }
]