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
import { useIceCreamMan } from '../../../../hooks/useIceCreamMan';


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

const PresaleRules = () => {

  const publicPresaleContract = usePublicPresaleFLVContract()
  const iceCreamMan = useIceCreamMan(publicPresaleContract)

  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  const { account } = useWeb3React()
  const [refreshDelay, setRefreshDelay] = useState(1000)
  const [rules, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(async () => {
      const _rules = await publicPresaleContract.methods.getRules().call()
      setState(_rules)
      //console.log(_rules)
      setRefreshDelay(6000)
    }, refreshDelay)
    return () => clearInterval(interval)
  }, [refreshDelay,account])
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS

  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)

  const claimsEnabled = rules[0]
  const enforceWhitelist = rules[1]
  const useTokensInContract = rules[2]
  const timedPresaleEnabled = rules[3]
  const contributionsEnabled = rules[4]
  const cappedPresaleEnabled = rules[5]
  const softCapMissedRefundEnabled = rules[6]
  const overridesAllowed_timedPresale = rules[7]
  const overridesAllowed_cappedPresale = rules[8]
  const shouldCheckContributionsEnabled = rules[9]

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
          ? 'Hide Rules'
          : 'Show Rules'
        }
      </Button>
      {isOpen && (<><Box mb="10px" mt="10px">
            {typeof(contributionsEnabled)=="undefined"?'':<Item>
              <Display>Contributions Enabled:</Display>
              {contributionsEnabled
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}

            {typeof(claimsEnabled)=="undefined"?'':<Item>
              <Display>Claims Enabled:</Display>
              {claimsEnabled
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}

            {typeof(enforceWhitelist)=="undefined"?'':<Item>
              <Display>Whitelist Enforced:</Display>
              {enforceWhitelist
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}

            {typeof(timedPresaleEnabled)=="undefined"?'':<Item>
              <Display>Time Window Enforced:</Display>
              {timedPresaleEnabled
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}

            {typeof(cappedPresaleEnabled)=="undefined"?'':<Item>
              <Display>Cap Enforced:</Display>
              {cappedPresaleEnabled
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}

            {softCapMissedRefundEnabled?<>
            {typeof(softCapMissedRefundEnabled)=="undefined"?'':<Item>
              <Display>Soft Cap missed Refunds Enabled:</Display>
              {softCapMissedRefundEnabled
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}
            </>:''}
          
            {typeof(overridesAllowed_timedPresale)=="undefined"?'':<Item>
              <Display>Timed Presale Overrides Allowed</Display>
              {overridesAllowed_timedPresale
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}

            {typeof(overridesAllowed_cappedPresale)=="undefined"?'':<Item>
              <Display>Capped Presale Overrides Allowed</Display>
              {overridesAllowed_cappedPresale
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}

            {account == iceCreamMan? <>
            {typeof(shouldCheckContributionsEnabled)=="undefined"?'':<Item>
              <Display>Contributions Enabled Enforced:</Display>
              {shouldCheckContributionsEnabled
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
            }</Item>}
            </>:''}
            
            {account == iceCreamMan? <>
              {typeof(useTokensInContract)=="undefined"?'':<Item>
              <Display>Use Tokens in Contract:</Display>
              {useTokensInContract
                ?<TextData>✔️</TextData>
                :<TextData>❌</TextData>
              }</Item>}
            </>:''}
          </Box>
        </>
      )}
    </CardFooter>
  )
}

  export default PresaleRules
