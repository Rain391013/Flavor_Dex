import BigNumber from 'bignumber.js'
import useTokenBalance from './useTokenBalance'
import { getFLVAddress } from '../utils/addressHelpers';

/**
 * A hook to check if a wallet's FLV balance is at least the amount passed in
 */
const useHasFlavorsBalance = (minimumBalance: BigNumber) => {
  const flavorsBalance = useTokenBalance(getFLVAddress())
  return flavorsBalance.gte(minimumBalance)
}

export default useHasFlavorsBalance
