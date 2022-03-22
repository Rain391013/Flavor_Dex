

import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { getWeb3NoAccount } from '../utils/web3'


// flavors
const useBalanceBNB = () => {
  const { account } = useWeb3React()
  const web3 = getWeb3NoAccount()
  const [state, setState] = useState(0)

  useEffect(() => {
    const fetchBalanceBNB = async (account) => {
      const bnbBalance = await web3.eth.getBalance(account)
      setState(Number(bnbBalance))
    }
    fetchBalanceBNB(account)
  }, [account])
  return state
}

export default useBalanceBNB





