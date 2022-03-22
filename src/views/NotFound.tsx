import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon, Image } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  
  return (
    <Page>
      <StyledNotFound>
        <Image src={'./images/flavors/choco.png'} width={128} height={128} alt="404 Not Found" />
        
        <Heading size="xxl">404</Heading>
        <Text mb="16px">Don't get salty, but theres nothing here</Text>
        <Button as="a" href="/" scale="sm">
          Back to Something Sweet
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
