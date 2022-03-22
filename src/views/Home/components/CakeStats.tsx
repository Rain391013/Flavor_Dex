import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { getNSMAddress } from 'utils/addressHelpers'
import { FLV_BACKGROUND_GRADIENT_BLUE_TO_PINK, FLV_GRADIENT_GOLD } from 'style/FlavorsSectionStyles'
import CardHeader from '../../Profile/components/CardHeader';
const StyledCakeStats = styled(Card)`
  background-image: ${FLV_GRADIENT_GOLD};
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const totalSupply = useTotalSupply(getNSMAddress())
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          Drip Stats
        </Heading>
        <Row>
          <Text fontSize="14px">Total Mooney Dripped</Text>
          {cakeSupply && <CardValue fontSize="14px" decimals={0} value={Number(0)} />}
        </Row>
        <Row>
          <Text fontSize="14px">Total SafeEarn Dripped</Text>
          <CardValue fontSize="14px" decimals={0} value={Number(0)} />
        </Row>
        { /*}
        <Row>
          <Text fontSize="14px">New CAKE/block</Text>
          <CardValue fontSize="14px" decimals={0} value={22} />
        </Row>
        */ }
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
