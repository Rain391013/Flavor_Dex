import { Box, Modal, Text } from '@pancakeswap-libs/uikit';
import { useWeb3React } from '@web3-react/core';
import BigNumber from 'bignumber.js';
import confetti from 'canvas-confetti';
import Spacer from 'components/Spacer';
import useBalanceBNB from 'hooks/useBalanceBNB';
import { delay } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Fonts } from 'style/FlavorsStyle';
import styled from 'styled-components';
import PresaleBalanceInput from '../../../../components/BalanceInput/PresaleBalanceInput';
import useConfirmTransaction from '../../../../hooks/useConfirmTransaction';
import { useFLVPerNativeCoin } from '../../../../hooks/usePresaleTokensPerBNB';
import ConfirmButton from '../../../Profile/components/ConfirmButton';
import AnimatedNumbers from './AnimatedNumbers';





const showConfetti = () => {
  confetti({
    resize: true,
    particleCount: 200,
    startVelocity: 30,
    gravity: 0.5,
    spread: 350,
    origin: {
      x: 0.5,
      y: 0.3,
    },
  })
}








const TextData = styled.div`
  font-family: ${Fonts.Consolas};
`

const TextAddress = styled.div`
  font-family: ${Fonts.Consolas};
  font-size: 14px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const Item = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
`

const Display = styled(Text)`
  flex: 1;
`

interface Props {
  contract: any
  onSuccess: (amount: BigNumber) => void
  onDismiss?: () => void
}

const FlavorsContributeModal: React.FC<Props> = ({ contract, onDismiss, onSuccess }) => {
  const [value, setValue] = useState('0')
  const { account } = useWeb3React()
  const balanceBNB = useBalanceBNB()
  const flvPerNativeCoin = useFLVPerNativeCoin(contract)
  const valueWithTokenDecimals = new BigNumber(value).times(new BigNumber(10).pow(18))
  const { isConfirmed, isConfirming, handleConfirm } = useConfirmTransaction({
    onConfirm: () => {
      return contract.methods.contribute().send({ value: Number(value) * 1e18, from: account, gas: 200000 })
    },
    onSuccess: async () => {
      onDismiss()
      onSuccess(valueWithTokenDecimals)
      handleConfetti()
    },
  })
  
  const handleConfetti = () => {
    //useEffect(() => {
      delay(showConfetti, 100)
    //}, [])    
  }

  

  return (
    <Modal title={`Contribute to Presale`} onDismiss={onDismiss}>
      <Text>
        {'\u00A0'}
        <Item>
          Balance:
          <AnimatedNumbers
            prefix={'  \u00A0'}
            decimals={4}
            value={typeof balanceBNB == 'undefined' ? 0 : balanceBNB / 1e18}
            suffix={' BNB'}
          />
        </Item>
        <Item></Item>
      </Text>
      {flvPerNativeCoin && (
        <Text>
          <AnimatedNumbers decimals={0} value={flvPerNativeCoin / 1e9} suffix={' FLV per BNB'} prefix={' Rate: '} />
        </Text>
      )}
      <Box maxWidth="400px">
        <PresaleBalanceInput
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          symbol="BNB"
          onSelectMax={() => setValue('2')}
          mb="24px"
        />
        <Text as="p" mb="24px">
          Contribute up to 2 BNB and Confirm Transaction
        </Text>
        {flvPerNativeCoin && value && (
          <>
            <Item>
              <Display>You will be able to claim:</Display>
              <AnimatedNumbers
                prefix=""
                decimals={0}
                value={(Number(flvPerNativeCoin) * Number(0+value)) / 1e9}
                suffix={' FLV'}
              />
            </Item>
            <Spacer />
          </>
        )}
        <ConfirmButton
          isConfirmDisabled={isConfirmed || valueWithTokenDecimals.isNaN() || valueWithTokenDecimals.eq(0)}
          isConfirming={isConfirming}
          onConfirm={handleConfirm}
        />
      </Box>
    </Modal>
  )
}

export default FlavorsContributeModal
