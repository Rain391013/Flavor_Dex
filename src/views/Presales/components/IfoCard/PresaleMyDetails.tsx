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
import { useRefundsEnabled } from '../../../../hooks/useRefundsEnabled';
import { ZERO } from './PresaleAddresses';

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


const PresaleAddresses = () => {
  
  const publicPresaleContract = usePublicPresaleFLVContract()
  const refundsEnabled = useRefundsEnabled(publicPresaleContract)
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  const { account } = useWeb3React()
  const [refreshDelay, setRefreshDelay] = useState(1000)
  const [state, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(async () => {
      const _state = await publicPresaleContract.methods.getHolderInfo(typeof(account)!="undefined"?account:ZERO).call()
      setState(_state)
      //console.log(_state)
      setRefreshDelay(6000)
    }, refreshDelay)
    return () => clearInterval(interval)
  }, [refreshDelay,account])
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)

  const remainingBNBcontribution = state[0]    
  const holdersClaimableFLV =  state[1]
  const holderContributions =  state[2]
  const claimedFLV =  state[3]
  const completedContributions =  state[4]
  const completedClaims =  state[5]
  const claimedRefund =  state[6]
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
          ? 'Hide My Info'
          : 'Show My Info'
        }
      </Button>
      {isOpen && (<><Box mb="10px" mt="10px">
        
            {typeof(holderContributions)=="undefined"?'':<Item>
                <Display>Contributions:</Display>
                <AnimatedNumbers decimals={2} value={holderContributions/1e18} suffix={' BNB'} />
            </Item>}

            {typeof(remainingBNBcontribution)=="undefined"?'':<Item>
                <Display>Remaining MAX Contribution:</Display>
                <AnimatedNumbers decimals={2} value={remainingBNBcontribution/1e18} suffix={' BNB'} />
            </Item>}

            {typeof(holdersClaimableFLV)=="undefined"?'':<Item>
                <Display>Purchased:</Display>
                <AnimatedNumbers decimals={0} value={holdersClaimableFLV/1e9} suffix={' FLV'} />
            </Item>}

            {typeof(claimedFLV)=="undefined"?'':<Item>
                <Display>Claimed:</Display>
                <AnimatedNumbers decimals={0} value={claimedFLV} suffix={' FLV'} />
            </Item>}
            {typeof(completedContributions)=="undefined"?'':<Item>
                <Display>Maxed Out Contributions:</Display>
                {/* <TrueFalse data={completedContributions}> */}
                {completedContributions
                  ?<TextData>✔️</TextData>
                  :<TextData>❌</TextData>
                }
            </Item>}

            {typeof(completedClaims)=="undefined"?'':<Item>
                <Display>Maxed Out Claims:</Display>
                {completedClaims
                  ?<TextData>✔️</TextData>
                  :<TextData>❌</TextData>
                }
            </Item>}

            {refundsEnabled?<>
              {typeof(claimedRefund)=="undefined"?'':<Item>
                  <Display>Refund Claimed:</Display>
                  <AnimatedNumbers decimals={2} value={claimedRefund} suffix={' BNB'} />
              </Item>}</>:''
            }

          </Box>
          <LinkExternal href={ `https://bscscan.com/address/${account}` }  style={{ margin: 'auto' }}>
            View My Wallet on BSCScan.com
          </LinkExternal>
        </>
      )}
    </CardFooter>
  )
}

  export default PresaleAddresses
