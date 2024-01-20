import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PixelCarsMotorsportClub',
  tokenName: 'PixelCarsMotorsportClub',
  tokenSymbol: 'PCMC',
  hiddenMetadataUri: 'ipfs://bafybeicyurhwxmypbj7ldpgxxdrqvjqswo4thqe2t6o3jovd52kbo3luaa/hidden.json',
  maxSupply: 4840,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.015,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.02,
    maxMintAmountPerTx: 50,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
