import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import {
  Text,
  LinkExternal,
  Box,
  CardFooter,
  Button,
  ChevronDownIcon,
  ChevronUpIcon,
  Heading,
} from '@pancakeswap-libs/uikit'
import { usePublicPresaleFLVContract } from '../../../../hooks/useContract'
import { Fonts } from 'style/FlavorsStyle'
import AnimatedNumbers from './AnimatedNumbers'
import { getDurationFromTimestamp } from '../../../../utils/flavorHelpers'
import useBlockCountdown from '../../../../hooks/useGetBlockCountdown'
import { CardBody } from '@pancakeswap-libs/uikit'
import { Progress } from '@pancakeswap-libs/uikit'
import { useCountdownToPresaleSTART } from '../../../../hooks/useCountdownToPresaleSTART';
import { useIceCreamMan } from 'hooks/useIceCreamMan';
import { useHardCap } from '../../../../hooks/usePresaleLimits';


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

const PresaleInfo = () => {
  const publicPresaleContract = usePublicPresaleFLVContract()
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  const { account } = useWeb3React()
  const [refreshDelay, setRefreshDelay] = useState(1000)
  const [info, setState] = useState(0)

  useEffect(() => {
    const interval = setInterval(async () => {
      const _state = await publicPresaleContract.methods.getInfo().call()
      setState(_state)
      setRefreshDelay(6000)
    }, refreshDelay)
    return () => clearInterval(interval)
  }, [refreshDelay, account])
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS

  const claimsEnabledOnBlockNumber = info[0]
  const globalTotal_maxContribution = info[1]
  const globalTotal_contributions = info[2]
  const globalTotal_claims = info[3]
  const globalTotal_refunds = info[4]
  const flvPerNativeCoin = info[5]
  const contractNativeCoinBalance = info[6]

  const presaleSTART:number = useCountdownToPresaleSTART(publicPresaleContract)
  const durationToBlock = useBlockCountdown(claimsEnabledOnBlockNumber)
  const [days, hours, minutes] = getDurationFromTimestamp(durationToBlock)

  const iceCreamMan = useIceCreamMan(publicPresaleContract)
  

   
  const [progress, setProgress] = useState(0)

  const [hardCap, setHardCap] = useState(0)
  useEffect(() => {
    const interval = setInterval(async () => {
      const limits = await publicPresaleContract.methods.getLimits().call()
      setHardCap(limits[2])
      setRefreshDelay(6000)
      setProgress((globalTotal_contributions / hardCap) * 100+40)
    }, refreshDelay)
    return () => clearInterval(interval)
  }, [refreshDelay, globalTotal_contributions])

  return (
    <CardBody>
      <Box>
      
        {presaleSTART>0?'':
          <Item>
            <Heading size="md" mb="8px">
              Progress
            </Heading>
          </Item>
        }

        {presaleSTART>0?'':
          <Block>
            <Progress variant="round" primaryStep={progress} />
          </Block>
        }
        
        {typeof(globalTotal_contributions)=="undefined"?'':<Item>
            <Display>Total Contributions:</Display>
            <AnimatedNumbers decimals={0} value={globalTotal_contributions/1e18} suffix={' BNB'} />
        </Item>}
        <>
          <Item>
              <Display>Hard Cap:</Display>
              <AnimatedNumbers decimals={0} value={650} suffix={' BNB'} />
          </Item>
        </>

        {typeof(flvPerNativeCoin)=="undefined"?'':<Item>
            <Display>FLV per BNB:</Display>
            <AnimatedNumbers decimals={0} value={flvPerNativeCoin/1e9} suffix={''} />
        </Item>}
        
        {account !== iceCreamMan?'': <>
        {typeof(globalTotal_claims)=="undefined"?'':<Item>
            <Display>Total FLV Claimed:</Display>
            <AnimatedNumbers decimals={0} value={globalTotal_claims/1e9} suffix={' FLV'} />
        </Item>}
            </>}

        {account !== iceCreamMan?'': <>
        {typeof(globalTotal_refunds)=="undefined"?'':<Item>
            <Display>Total Refunds Claimed:</Display>
            <AnimatedNumbers decimals={0} value={globalTotal_refunds/1e18} suffix={' BNB'} />
        </Item>}
            </>}
        
        {account !== iceCreamMan?'': <>
        {typeof(contractNativeCoinBalance)=="undefined"?'':<Item>
            <Display>Presale Contract BNB Balance:</Display>
            <AnimatedNumbers decimals={0} value={contractNativeCoinBalance/1e18} suffix={' BNB'} />
        </Item>}
            </>}
        
            
      </Box>
    </CardBody>
  )
}

export default PresaleInfo
