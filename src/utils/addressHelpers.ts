import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const mainNetChainId = 56
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}

export const getMooneyAddress = () => {
  return getAddress(tokens.Mooney.address)
}
export const getSAFEEARNAddress = () => {
  return getAddress(tokens.SafeEarn.address)
}

export const getPublicPresaleFLVAddress = () => {
  return getAddress(addresses.publicPresaleFLV)
}


export const getFLVAddress = () => {
  return getAddress(tokens.flv.address)
}

export const getPresaleFLVAddress = () => {
  return getAddress(addresses.PresaleFLV)
}

export const getNSMAddress = () => {
  return getAddress(tokens.nsm.address)
}
export const getNSMPairAddress = () => {
  return getAddress(addresses.nsmPair)
}
export const getNSMMigrateAddress = () => {
  return getAddress(addresses.nsmMigrate)
}




export const getWBNBAddress = () => {
  return getAddress(addresses.WBNB)
}
export const getWETHAddress = () => {
  return getAddress(addresses.WETH)
}
export const getNotToolsLPDataV3Address = () => {
  return getAddress(addresses.NotToolsLPDataV3)
}
export const getNotToolsERC20DataAddress = () => {
  return getAddress(addresses.NotToolsERC20Data)
}
export const getNotToolsMultiSendAddress = () => {
  return getAddress(addresses.NotToolsMultiSend)
}
export const getNotToolsBalancesV2Address = () => {
  return getAddress(addresses.NotToolsBalancesV2)
}
export const getNotToolsLivePriceV3Address = () => {
  return getAddress(addresses.NotToolsLivePriceV3)
}
export const getNotToolsFactoryCreate2Address = () => {
  return getAddress(addresses.NotToolsFactoryCreate2)
}
export const getPancakeFactoryV2Address = () => {
  return getAddress(addresses.PancakeFactoryV2)
}
export const getPancakeRouterAddress = () => {
  return getAddress(addresses.PancakeRouter)
}




export const getCakeAddress = () => {
  return getAddress(tokens.cake.address)
}
export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.mulltiCall)
}
export const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address)
}
export const getLotteryAddress = () => {
  return getAddress(addresses.lottery)
}
export const getLotteryTicketAddress = () => {
  return getAddress(addresses.lotteryNFT)
}
export const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
export const getPancakeRabbitsAddress = () => {
  return getAddress(addresses.pancakeRabbits)
}
export const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
export const getClaimRefundAddress = () => {
  return getAddress(addresses.claimRefund)
}
export const getPointCenterIfoAddress = () => {
  return getAddress(addresses.pointCenterIfo)
}
export const getBunnySpecialAddress = () => {
  return getAddress(addresses.bunnySpecial)
}
export const getTradingCompetitionAddress = () => {
  return getAddress(addresses.tradingCompetition)
}
export const getEasterNftAddress = () => {
  return getAddress(addresses.easterNft)
}
