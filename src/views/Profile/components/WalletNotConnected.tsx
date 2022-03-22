import React from 'react'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'

const WalletNotConnected = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <Heading size="xl" mb="8px">
        Oops!
      </Heading>
      <Text as="p" mb="16px">
        Please connect your wallet to continue
      </Text>
      <UnlockButton />
    </div>
  )
}

export default WalletNotConnected
