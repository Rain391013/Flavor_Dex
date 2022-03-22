import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core';
import {
  Text,
  LinkExternal,
  Box,
  CardFooter,
  Button,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@pancakeswap-libs/uikit'
import { usePublicPresaleFLVContract } from '../../../../hooks/useContract';
import { Fonts } from 'style/FlavorsStyle';
import AnimatedNumbers from './AnimatedNumbers';

const TextData = styled.div`
  font-family: ${Fonts.Consolas};
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

const PresaleLimits = () => {  
  const publicPresaleContract = usePublicPresaleFLVContract()
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  const { account } = useWeb3React()
  const [refreshDelay, setRefreshDelay] = useState(1000)
  const [limits, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(async () => {
      const _state = await publicPresaleContract.methods.getLimits().call()
      setState(_state)
      setRefreshDelay(6000)
    }, refreshDelay)
    return () => clearInterval(interval)
  }, [refreshDelay,account])
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)
  const softCap = limits[0]
  const softCapHit = limits[1]
  const hardCap = limits[2]
  const hardCapHit = limits[3]
  const minHolderContribution = limits[4]
  const maxHolderContribution = limits[5]
  return (
    <CardFooter>
      <Button
        variant="text"
        onClick={handleToggle}
        width="100%"
        endIcon={
          isOpen 
            ? <ChevronUpIcon color="primary" width="24px" /> 
            : <ChevronDownIcon color="primary" width="24px" />
        }
      >
        {isOpen 
          ? 'Hide Contribution Limits'
          : 'Show Contribution Limits'
        }
      </Button>
      {isOpen && (<><Box mb="10px" mt="10px">

            {typeof(softCap)=="undefined"?'':<Item>
                <Display>Soft Cap:</Display>
                <AnimatedNumbers decimals={0} value={softCap/1e18} suffix={' BNB'} />
            </Item>}

            {typeof(softCapHit)=="undefined"?'':<Item>
              <Display>Soft Cap Hit:</Display>
              {softCapHit
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}

            {typeof(hardCap)=="undefined"?'':<Item>
                <Display>Hard Cap:</Display>
                <AnimatedNumbers decimals={0} value={hardCap/1e18} suffix={' BNB'} />
            </Item>}

            {typeof(hardCapHit)=="undefined"?'':<Item>
              <Display>Hard Cap Hit:</Display>
              {hardCapHit
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}

            {typeof(minHolderContribution)=="undefined"?'':<Item>
                <Display>MIN Contribution:</Display>
                <AnimatedNumbers decimals={3} value={minHolderContribution/1e18} suffix={' BNB'} />
            </Item>}

            {typeof(maxHolderContribution)=="undefined"?'':<Item>
                <Display>MAX Contribution:</Display>
                <AnimatedNumbers decimals={3} value={maxHolderContribution/1e18} suffix={' BNB'} />
            </Item>}
          </Box>
        </>
      )}
    </CardFooter>
  )
}

  export default PresaleLimits
