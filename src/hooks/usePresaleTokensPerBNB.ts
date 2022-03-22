

import { useState, useEffect } from 'react';

export const useFLVPerNativeCoin = (contract: any) => {
  // GETS DATA AFTER 1 SECOND DELAY
  const [state, setState] = useState(0);
  useEffect(() => {
    const interval = setTimeout(async () => {
      const _state = await contract.methods.getInfo().call()
      setState(_state)
      //console.log(_state)
    }, 1000)
    return () => clearInterval(interval)
  }, [contract])
  // GETS DATA AFTER 1 SECOND DELAY
  const flvPerNativeCoin =  state[5]
  return flvPerNativeCoin
}


