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
import { utils } from 'ethers';

export const ZERO = '0x0000000000000000000000000000000000000000'

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


const PresaleAddresses = () => {
  
  const publicPresaleContract = usePublicPresaleFLVContract()
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  const { account } = useWeb3React()
  const [refreshDelay, setRefreshDelay] = useState(1000)
  const [state, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(async () => {
      const _state = await publicPresaleContract.methods.getAddresses().call()
      setState(_state)
      //console.log(_state)
      setRefreshDelay(6000)
    }, refreshDelay)
    return () => clearInterval(interval)
  }, [refreshDelay,account])
  // GETS DATA AFTER 1 SECOND DELAY, THEN EACH SUBSEQUENT DELAY IS 6 SECONDS
  

  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)

  const presaleFLV = state[0]    
  const flv =  state[1]
  const creamery =  state[2]
  const iceCreamMan =  state[3]
  const pendingICM =  state[4]
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
          ? 'Hide Addresses'
          : 'Show Addresses'
        }
      </Button>
      {isOpen && (<>
        <Box mb="10px" mt="10px">

          <Block>
            <Item>
                <Display>Presale:</Display>                
            </Item>
            {presaleFLV == ZERO?'TBA':
              <LinkExternal href={ `https://bscscan.com/address/${presaleFLV}` }  style={{ margin: 'auto' }}>
                <TextAddress>{presaleFLV}</TextAddress>
              </LinkExternal>
            }                
          </Block>

          <Block>
            <Item>
                <Display>Token:</Display>                
            </Item>
            
            {account == iceCreamMan? <>
              <LinkExternal href={ `https://bscscan.com/address/${flv}` }  style={{ margin: 'auto' }}>
                <TextAddress>{flv}</TextAddress>
              </LinkExternal>
            </> : <>
              {flv==ZERO?'TBA':
                <LinkExternal href={ `https://bscscan.com/address/${flv}` }  style={{ margin: 'auto' }}>
                  <TextAddress>{flv}</TextAddress>
                </LinkExternal>
            } </> }
          </Block>

            {account == iceCreamMan? <>
              <Block>
                <Item>
                    <Display>Creamery:</Display>                
                </Item>
                  <LinkExternal href={ `https://bscscan.com/address/${creamery}` }  style={{ margin: 'auto' }}>
                    <TextAddress>{creamery}</TextAddress>
                  </LinkExternal>
              </Block>
              
              <Block>
                <Item>
                    <Display>Ice Cream Man:</Display>                
                </Item>
                  <LinkExternal href={ `https://bscscan.com/address/${iceCreamMan}` }  style={{ margin: 'auto' }}>
                    <TextAddress>{iceCreamMan}</TextAddress>
                  </LinkExternal>
              </Block>
              
              <Block>
                <Item>
                    <Display>Pending Ice Cream Man:</Display>                
                </Item>
                  <LinkExternal href={ `https://bscscan.com/address/${pendingICM}` }  style={{ margin: 'auto' }}>
                    <TextAddress>{pendingICM}</TextAddress>
                  </LinkExternal>
              </Block>
            </>:''}




          </Box>
        </>
      )}
    </CardFooter>
  )
}

  export default PresaleAddresses
