import React from 'react'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'

const UnlockButton = (props) => {
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Button width="100%" variant="subtle" onClick={onPresentConnectModal} {...props}>
      Unlock Wallet
    </Button>
  )
}

export default UnlockButton
