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
import { useIceCreamMan } from 'hooks/useIceCreamMan';

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




const PresaleTimes = () => {
  
  const publicPresaleContract = usePublicPresaleFLVContract()
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  const { account } = useWeb3React()
  const [refreshDelay, setRefreshDelay] = useState(1000)
  const [times, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(async () => {
      const _state = await publicPresaleContract.methods.getTimes().call()
      setState(_state)
      setRefreshDelay(6000)
    }, refreshDelay)
    return () => clearInterval(interval)
  }, [refreshDelay,account])
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  const iceCreamMan = useIceCreamMan(publicPresaleContract)
  
  const presaleDuration_Seconds: number = times[0]
  const startTimeString: string = times[1]
  const presaleTimestampSTART: number  = times[2]
  const presaleTimestampEND: number  = times[3]
  const countdownToPresaleSTART: number  = times[4]
  const countdownToPresaleEND: number  = times[5]

  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <CardFooter>
        <Box mb="10px" mt="10px">
      
        {typeof(countdownToPresaleSTART)=="undefined"||countdownToPresaleSTART<=0?'':<Item>          
            <Display>Starts In: </Display>
            <AnimatedNumbers decimals={0} value={Math.floor((countdownToPresaleSTART)/60/60)} suffix={' Hours'} />{'\u00A0'}
            <AnimatedNumbers decimals={0} value={Math.floor((((countdownToPresaleSTART)/60/60)-(Math.floor((countdownToPresaleSTART)/60/60)))*60)} suffix={' Minutes'} />
        </Item>}
        
        {account == iceCreamMan? <>
        {typeof(countdownToPresaleEND)=="undefined"||countdownToPresaleEND<=0?'':<Item>
            <Display>Ends In: </Display>
            <AnimatedNumbers decimals={0} value={Math.floor((countdownToPresaleEND)/60/60)} suffix={' Hours'} />{'\u00A0'}
            <AnimatedNumbers decimals={0} value={Math.floor((((countdownToPresaleEND)/60/60)-(Math.floor((countdownToPresaleEND)/60/60)))*60)} suffix={' Minutes'} />
        </Item>}
            </> : '' }

        {typeof(presaleDuration_Seconds)=="undefined"?'':<Item>
            <Display>Whitelist Only:</Display>
            <AnimatedNumbers decimals={0} value={presaleDuration_Seconds/60} suffix={' Minutes'} />
        </Item>}

             {/*
            {typeof(presaleTimestampSTART)=="undefined"?'':<Item>
                <Display>Start Time:</Display>
                <TextData>{presaleTimestampSTART}</TextData>
            </Item>}

            {typeof(presaleTimestampEND)=="undefined"?'':<Item>
                <Display>Whitelist Only End Time:</Display>
                <TextData>{presaleTimestampEND}</TextData>
            </Item>}
            */}

            
          </Box>
      {/*   </> 
       )} */}
    </CardFooter>
  )
}

  export default PresaleTimes
