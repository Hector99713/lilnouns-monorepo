import { Interface } from 'ethers/lib/utils';
import { task,types } from 'hardhat/config';
import { default as NounsAuctionHouseABI } from '../abi/contracts/NounsAuctionHouse.sol/NounsAuctionHouse.json';
import {DeployedContract} from "./types";

type ContractName =
  // | 'NFTDescriptor'
  // | 'NounsDescriptor'
  // | 'NounsSeeder'
   'NounsToken'
  | 'NounsAuctionHouse'
  | 'NounsAuctionHouseProxyAdmin'
  | 'NounsAuctionHouseProxy'
  | 'NounsDAOExecutor'
  | 'NounsDAOLogicV1'
  | 'NounsDAOProxy';


  const bytes = new Interface(NounsAuctionHouseABI).encodeFunctionData('initialize', [
    "0xbd9bd9722FDE1ec321F590993F7f5961F1Bd0d06", // nouns token
    "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // weth (mainnet)
    "90", // auctionTimeBuffer,
    "1", // auctionReservePrice,
    "2", // auctionMinIncrementBidPercentage,
    "900", // auctionDuration,
   ])
  

interface VerifyArgs {
  address: string;
  constructorArguments?: (string | number)[];
  libraries?: Record<string, string>;
}


const expectedAuctionHouseProxyAddress = '0x2E10335d2EE34715453936399301B42D2ea8c55c'
const expectedNounsDAOProxyAddress = '0x4F49457D0Ddd610B451686AeB17dE9562094cD00'


task('verify-etherscan', 'Verify the Solidity contracts on Etherscan')
.addParam('contracts', 'Contract objects from the deployment', undefined, types.json)
.setAction(async ({ contracts }: { contracts: Record<ContractName, DeployedContract> }, hre) => {
  for (const [name, args] of Object.entries(contracts)) {
    console.log(`verifying ${name}...`);
    try {
      await hre.run('verify:verify', {
        ...args,
      });
    } catch (e) {
      console.error(e);
    }
  }
});
