import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import { FLV_BACKGROUND_GRADIENT_LIGHT } from '../../../style/FlavorsSectionStyles';
import { Image } from '@pancakeswap-libs/uikit';

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-weight: 600;
`
const StyledHero = styled.div`
  background-image: ${FLV_BACKGROUND_GRADIENT_LIGHT};
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`



const Item = styled.div`
  align-items: end;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
`
const Hero = () => {

  return (
    <StyledHero>
      <Container>
        
        
        <Item><Image src="/images/flavors/flavorsbsc-branded-2x.png" alt="flavors coin" width={1068/4} height={295/4}></Image><Title>&nbsp;&nbsp;&nbsp;PRESALE</Title></Item>
        <Blurb>Exclusive Presales for Flavors Holders.</Blurb>
      </Container>
    </StyledHero>
  )
}

export default Hero
