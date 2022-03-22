import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getBep20Contract,
  getCakeContract,
  getBunnyFactoryContract,
  getBunnySpecialContract,
  getPancakeRabbitContract,
  getProfileContract,
  getIfoContract,
  getLotteryContract,
  getLotteryTicketContract,
  getMasterchefContract,
  getPointCenterIfoContract,
  getSouschefContract,
  getClaimRefundContract,
  getTradingCompetitionContract,
  getEasterNftContract,

  getPublicPresaleFLVContract,
  getFLVContract,
  getMigrateNSMContract,
  getMooneyContract,
  getNotTools_BalancesV2Contract,
  getNotTools_ERC20DataContract,
  getNotTools_FactoryCreate2Contract,
  getNotTools_LivePriceV3Contract,
  getNotTools_LPDataV3Contract,
  getNotTools_MultiSendContract,
  getNSMContract,
  getNSMPairContract,
  getPancake_FactoryContract,
  getPancake_RouterContract,
  getPresaleFLVContract,
  getSafeEarnContract,
  getWBNBContract,
  getWeth10Contract,
} from 'utils/contractHelpers'


export const useIfoContract = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getIfoContract(address, web3), [address, web3])
}

export const usePublicPresaleFLVContract = () => {
  const web3 = useWeb3()
return useMemo(() => getPublicPresaleFLVContract(web3), [web3])}



export const useMooneyContract = () => {
  const web3 = useWeb3()
return useMemo(() => getMooneyContract(web3), [web3])}

export const useSafeEarnContract = () => {
  const web3 = useWeb3()
return useMemo(() => getSafeEarnContract(web3), [web3])}

export const useFLVContract = () => {
  const web3 = useWeb3()
return useMemo(() => getFLVContract(web3), [web3])}

export const useMigrateNSMContract = () => {
  const web3 = useWeb3()
return useMemo(() => getMigrateNSMContract(web3), [web3])}

export const useNotTools_BalancesV2Contract = () => {
  const web3 = useWeb3()
return useMemo(() => getNotTools_BalancesV2Contract(web3), [web3])}

export const useNotTools_ERC20DataContract = () => {
  const web3 = useWeb3()
return useMemo(() => getNotTools_ERC20DataContract(web3), [web3])}

export const useNotTools_FactoryCreate2Contract = () => {
  const web3 = useWeb3()
return useMemo(() => getNotTools_FactoryCreate2Contract(web3), [web3])}

export const useNotTools_LivePriceV3Contract = () => {
  const web3 = useWeb3()
return useMemo(() => getNotTools_LivePriceV3Contract(web3), [web3])}

export const useNotTools_LPDataV3Contract = () => {
  const web3 = useWeb3()
return useMemo(() => getNotTools_LPDataV3Contract(web3), [web3])}

export const useNotTools_MultiSendContract = () => {
  const web3 = useWeb3()
return useMemo(() => getNotTools_MultiSendContract(web3), [web3])}

export const useNSMContract = () => {
  const web3 = useWeb3()
return useMemo(() => getNSMContract(web3), [web3])}

export const usePancake_FactoryContract = () => {
  const web3 = useWeb3()
return useMemo(() => getPancake_FactoryContract(web3), [web3])}

export const useNSMPairContract = () => {
  const web3 = useWeb3()
return useMemo(() => getNSMPairContract(web3), [web3])}

export const usePancake_RouterContract = () => {
  const web3 = useWeb3()
return useMemo(() => getPancake_RouterContract(web3), [web3])}

export const usePresaleFLVContract = () => {
  const web3 = useWeb3()
return useMemo(() => getPresaleFLVContract(web3), [web3])}

export const useWBNBContract = () => {
  const web3 = useWeb3()
return useMemo(() => getWBNBContract(web3), [web3])}

export const useWeth10Contract = () => {
  const web3 = useWeb3()
return useMemo(() => getWeth10Contract(web3), [web3])}
























/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export const useCake = () => {
  const web3 = useWeb3()
  return useMemo(() => getCakeContract(web3), [web3])
}

export const useBunnyFactory = () => {
  const web3 = useWeb3()
  return useMemo(() => getBunnyFactoryContract(web3), [web3])
}

export const usePancakeRabbits = () => {
  const web3 = useWeb3()
  return useMemo(() => getPancakeRabbitContract(web3), [web3])
}

export const useProfile = () => {
  const web3 = useWeb3()
  return useMemo(() => getProfileContract(web3), [web3])
}

export const useLottery = () => {
  const web3 = useWeb3()
  return useMemo(() => getLotteryContract(web3), [web3])
}

export const useLotteryTicket = () => {
  const web3 = useWeb3()
  return useMemo(() => getLotteryTicketContract(web3), [web3])
}

export const useMasterchef = () => {
  const web3 = useWeb3()
  return useMemo(() => getMasterchefContract(web3), [web3])
}

export const useSousChef = (id) => {
  const web3 = useWeb3()
  return useMemo(() => getSouschefContract(id, web3), [id, web3])
}

export const usePointCenterIfoContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getPointCenterIfoContract(web3), [web3])
}

export const useBunnySpecialContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getBunnySpecialContract(web3), [web3])
}

export const useClaimRefundContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getClaimRefundContract(web3), [web3])
}

export const useTradingCompetitionContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getTradingCompetitionContract(web3), [web3])
}

export const useEasterNftContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getEasterNftContract(web3), [web3])
}
