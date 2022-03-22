import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { flavorsContribute } from '../utils/callHelpers'
import { usePublicPresaleFLVContract } from './useContract';


export const useContribute = () => {
  const { account } = useWeb3React()
  const publicPresaleFLVContract = usePublicPresaleFLVContract()
  const handleContribute = useCallback(
    async (amount: string) => {
        await flavorsContribute(publicPresaleFLVContract, amount, account)
    },
    [account, publicPresaleFLVContract],
  )
  return { onContribute: handleContribute }
}

export default useContribute
