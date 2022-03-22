import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Text,
  LinkExternal,
  Link,
  Box,
  CardFooter,
  Button,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@pancakeswap-libs/uikit'
import { PublicIfoState } from 'hooks/useGetPublicIfoData'
import { Ifo } from 'config/constants/types'

export interface IfoCardDetailsProps {
  ifo: Ifo
  publicIfoData: PublicIfoState
}

const Item = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
`

const Display = styled(Text)`
  flex: 1;
`

const PresaleCardDetails /* : /* React.FC< IfoCardDetailsProps >*/ = (/*{ ifo, publicIfoData }*/) => {
  const [isOpen, setIsOpen] = useState(false)
  // const { description, cakeToBurn, projectSiteUrl, launchDate, launchTime, saleAmount, raiseAmount } = ifo
  // const { raisingAmount, totalAmount } = publicIfoData
  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <CardFooter>
      <Button
        variant="text"
        onClick={handleToggle}
        width="100%"
        endIcon={
          isOpen ? <ChevronUpIcon color="primary" width="24px" /> : <ChevronDownIcon color="primary" width="24px" />
        }
      >
        {isOpen ? 'Hide' : 'Details'}
      </Button>
      {isOpen && (
        <>
          <Text as="p" color="textSubtle" my="24px">
            {/* description */}
          </Text>
          <Box mb="24px">
            <Item>
              <Display>Launch Time</Display>
              <Text>
                {/* launchDate */},
                <Link
                  href="https://www.timeanddate.com/worldclock/singapore/singapore"
                  target="blank"
                  rel="noopener noreferrer"
                  ml="4px"
                  style={{ display: 'inline' }}
                >
                  {/* launchTime */}
                </Link>
              </Text>
            </Item>
            <Item>
              <Display>For Sale</Display>
              <Text>{/* saleAmount */}</Text>
            </Item>
            <Item>
              <Display>To raise (BNB)</Display>
              <Text>{/* raiseAmount */}</Text>
            </Item>
            {/*
            <Item>
              <Display>CAKE to burn (USD)</Display>
              <Text>{cakeToBurn}</Text>
            </Item>
            */}
            <Item>
              <Display>Total raised (% of target)</Display>
              <Text>{/* `${ totalAmount.div(raisingAmount).times(100).toFixed(2)}%` */ }</Text>
            </Item>
          </Box>
          <LinkExternal href={ 'https://flavorsBSC.com' }  style={{ margin: 'auto' }}>
            View project site
          </LinkExternal>
        </>
      )}
    </CardFooter>
  )
}

export default PresaleCardDetails
