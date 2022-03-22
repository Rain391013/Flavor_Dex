import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utils/web3'
import { poolsConfig } from 'config/constants'
import { PoolCategory } from 'config/constants/types'

// Addresses
import {
  
  getMooneyAddress,
  getSAFEEARNAddress,
  getFLVAddress,
  getPresaleFLVAddress,
  getNSMAddress,
  getNSMPairAddress,
  getNSMMigrateAddress,
  getWBNBAddress,
  getWETHAddress,
  getNotToolsLPDataV3Address,
  getNotToolsERC20DataAddress,
  getNotToolsMultiSendAddress,
  getNotToolsBalancesV2Address,
  getNotToolsLivePriceV3Address,
  getNotToolsFactoryCreate2Address,
  getPancakeFactoryV2Address,
  getPancakeRouterAddress,



  getAddress,
  getPancakeProfileAddress,
  getPancakeRabbitsAddress,
  getBunnyFactoryAddress,
  getBunnySpecialAddress,
  getCakeAddress,
  getLotteryAddress,
  getLotteryTicketAddress,
  getMasterChefAddress,
  getPointCenterIfoAddress,
  getClaimRefundAddress,
  getTradingCompetitionAddress,
  getEasterNftAddress,
} from 'utils/addressHelpers'

// ABI

import PublicPresaleFLV_ABI from 'config/abi/PublicPresaleFLV.json'
import erc20_ABI from 'config/abi/erc20.json'
import FLV_ABI from 'config/abi/FLV.json'
import MigrateNSM_ABI from 'config/abi/MigrateNSM.json'
import NotTools_BalancesV2_ABI from 'config/abi/NotTools_BalancesV2.json'
import NotTools_ERC20Data_ABI from 'config/abi/NotTools_ERC20Data.json'
import NotTools_FactoryCreate2_ABI from 'config/abi/NotTools_FactoryCreate2.json'
import NotTools_LivePriceV3_ABI from 'config/abi/NotTools_LivePriceV3.json'
import NotTools_LPDataV3_ABI from 'config/abi/NotTools_LPDataV3.json'
import NotTools_MultiSend_ABI from 'config/abi/NotTools_MultiSend.json'
import NSM_ABI from 'config/abi/NSM.json'
import Pancake_Factory_ABI from 'config/abi/Pancake_Factory.json'
import Pancake_Pair_ABI from 'config/abi/Pancake_Pair.json'
import Pancake_Router_ABI from 'config/abi/Pancake_Router.json'
import PresaleFLV_ABI from 'config/abi/PresaleFLV.json'
import WBNB_ABI from 'config/abi/WBNB.json'
import Weth10_ABI from 'config/abi/Weth10.json'
import Moooney_ABI from 'config/abi/Mooney.json'
import SafeEarn_ABI from 'config/abi/SafeEarn.json'



import profileABI from 'config/abi/pancakeProfile.json'
import pancakeRabbitsAbi from 'config/abi/pancakeRabbits.json'
import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'
import bep20Abi from 'config/abi/erc20.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import cakeAbi from 'config/abi/cake.json'
import ifoAbi from 'config/abi/ifo.json'
import pointCenterIfo from 'config/abi/pointCenterIfo.json'
import lotteryAbi from 'config/abi/lottery.json'
import lotteryTicketAbi from 'config/abi/lotteryNft.json'
import masterChef from 'config/abi/masterchef.json'
import sousChef from 'config/abi/sousChef.json'
import sousChefBnb from 'config/abi/sousChefBnb.json'
import claimRefundAbi from 'config/abi/claimRefund.json'
import tradingCompetitionAbi from 'config/abi/tradingCompetition.json'
import easterNftAbi from 'config/abi/easterNft.json'
import { getPublicPresaleFLVAddress } from './addressHelpers';










//
/*
export const geterc20Contract = (web3?: Web3) => {
  return getContract(cakeAbi, getCakeAddress(), web3)
}
*/

export const getPublicPresaleFLVContract = (web3?: Web3) => {
  return getContract(PublicPresaleFLV_ABI, getPublicPresaleFLVAddress(), web3)
}

export const getMooneyContract = (web3?: Web3) => {
  return getContract(Moooney_ABI, getMooneyAddress(), web3)
}
export const getSafeEarnContract = (web3?: Web3) => {
  return getContract(SafeEarn_ABI, getSAFEEARNAddress(), web3)
}
export const getFLVContract = (web3?: Web3) => {
  return getContract(FLV_ABI, getFLVAddress(), web3)
}
export const getMigrateNSMContract = (web3?: Web3) => {
  return getContract(MigrateNSM_ABI, getNSMMigrateAddress(), web3)
}
export const getNotTools_BalancesV2Contract = (web3?: Web3) => {
  return getContract(NotTools_BalancesV2_ABI, getNotToolsBalancesV2Address(), web3)
}
export const getNotTools_ERC20DataContract = (web3?: Web3) => {
  return getContract(NotTools_ERC20Data_ABI, getNotToolsERC20DataAddress(), web3)
}
export const getNotTools_FactoryCreate2Contract = (web3?: Web3) => {
  return getContract(NotTools_FactoryCreate2_ABI, getNotToolsFactoryCreate2Address(), web3)
}
export const getNotTools_LivePriceV3Contract = (web3?: Web3) => {
  return getContract(NotTools_LivePriceV3_ABI, getNotToolsLivePriceV3Address(), web3)
}
export const getNotTools_LPDataV3Contract = (web3?: Web3) => {
  return getContract(NotTools_LPDataV3_ABI, getNotToolsLPDataV3Address(), web3)
}
export const getNotTools_MultiSendContract = (web3?: Web3) => {
  return getContract(NotTools_MultiSend_ABI, getNotToolsMultiSendAddress(), web3)
}
export const getNSMContract = (web3?: Web3) => {
  return getContract(NSM_ABI, getNSMAddress(), web3)
}
export const getPancake_FactoryContract = (web3?: Web3) => {
  return getContract(Pancake_Factory_ABI, getPancakeFactoryV2Address(), web3)
}
export const getNSMPairContract = (web3?: Web3) => {
  return getContract(Pancake_Pair_ABI, getNSMPairAddress(), web3)
}
export const getPancake_RouterContract = (web3?: Web3) => {
  return getContract(Pancake_Router_ABI, getPancakeRouterAddress(), web3)
}
export const getPresaleFLVContract = (web3?: Web3) => {
  return getContract(PresaleFLV_ABI, getPresaleFLVAddress(), web3)
}
export const getWBNBContract = (web3?: Web3) => {
  return getContract(WBNB_ABI, getWBNBAddress(), web3)
}
export const getWeth10Contract = (web3?: Web3) => {
  return getContract(Weth10_ABI, getWETHAddress(), web3)
}


















const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address)
}

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3)
}
export const getLpContract = (address: string, web3?: Web3) => {
  return getContract(lpTokenAbi, address, web3)
}
export const getIfoContract = (address: string, web3?: Web3) => {
  return getContract(ifoAbi, address, web3)
}
export const getSouschefContract = (id: number, web3?: Web3) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const abi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef
  return getContract(abi, getAddress(config.contractAddress), web3)
}
export const getPointCenterIfoContract = (web3?: Web3) => {
  return getContract(pointCenterIfo, getPointCenterIfoAddress(), web3)
}
export const getCakeContract = (web3?: Web3) => {
  return getContract(cakeAbi, getCakeAddress(), web3)
}
export const getProfileContract = (web3?: Web3) => {
  return getContract(profileABI, getPancakeProfileAddress(), web3)
}
export const getPancakeRabbitContract = (web3?: Web3) => {
  return getContract(pancakeRabbitsAbi, getPancakeRabbitsAddress(), web3)
}
export const getBunnyFactoryContract = (web3?: Web3) => {
  return getContract(bunnyFactoryAbi, getBunnyFactoryAddress(), web3)
}
export const getBunnySpecialContract = (web3?: Web3) => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress(), web3)
}
export const getLotteryContract = (web3?: Web3) => {
  return getContract(lotteryAbi, getLotteryAddress(), web3)
}
export const getLotteryTicketContract = (web3?: Web3) => {
  return getContract(lotteryTicketAbi, getLotteryTicketAddress(), web3)
}
export const getMasterchefContract = (web3?: Web3) => {
  return getContract(masterChef, getMasterChefAddress(), web3)
}
export const getClaimRefundContract = (web3?: Web3) => {
  return getContract(claimRefundAbi, getClaimRefundAddress(), web3)
}
export const getTradingCompetitionContract = (web3?: Web3) => {
  return getContract(tradingCompetitionAbi, getTradingCompetitionAddress(), web3)
}
export const getEasterNftContract = (web3?: Web3) => {
  return getContract(easterNftAbi, getEasterNftAddress(), web3)
}
