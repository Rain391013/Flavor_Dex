import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image, CardHeader as UIKitCardHeader } from '@pancakeswap-libs/uikit';
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'
import drips from 'config/constants/drips';


const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)
const safeearnInfo = ifosConfig.find((ifo) => ifo.id == 'safeearn')
const mooneyInfo = ifosConfig.find((ifo) => ifo.id == 'mooney')

//const _safeearnInfo = 



const Ifo = () => {
  return (
    <div>      
      <IfoCards>
        <IfoCard ifo={safeearnInfo} />
        <IfoCard ifo={mooneyInfo} />
      </IfoCards>
{/*
      
      <LaunchIfoCallout>
        <div>
          <Title as="h2">How to take part</Title>
          <Heading mb="16px">Before Sale:</Heading>
          <List>
            <li>Buy BNB</li>    
               <li>Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity</li>
     </List>
        
          <Flex mb="16px">
            <LinkExternal href="localhost:30819/#/swap" mr="16px">
              Buy CAKE'
            </LinkExternal>
            <LinkExternal href="localhost:30819/#/add/BNB/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82">
              Get LP tokens
            </LinkExternal>
          </Flex>
          
          <Heading mb="16px">During Sale:</Heading>
          <List>
            <li>While the sale is live, deposit up to 2 BNB</li>
          </List>
          <Heading mb="16px">After Sale:</Heading>
          <List>
            <li>After the Pancake Swap launch, click the 'Claim' button and claim your Flavors Tokens!</li>
            <li>Done!</li>
          </List>
          {/* 
          <Text as="div" pt="16px">
            <Button
              as="a"
              variant="secondary"
              href="https://docs.pancakeswap.exchange/core-products/ifo-initial-farm-offering"
            >
              Read more
            </Button>
          </Text>
          
        </div>
        <div>
          <Image src="/images/flavors/Token-3D-stacked.png" alt="scoopy coin" width={468/2} height={334/2}  />
          <div>
            <Title as="h2">Want to launch your own Presale?</Title>
            <Text mb={3}>
                Launch your project with Flavors! Flavors BSC is here for the community. Grab a taste out of what it means to get more from DeFi.
            </Text>
            <Button
            disabled
              as="a"
              href=""
              external
            >
              Apply to launch
            </Button>
          </div>
        </div>
      </LaunchIfoCallout>
          */}
    </div>
  )
}

export default Ifo
