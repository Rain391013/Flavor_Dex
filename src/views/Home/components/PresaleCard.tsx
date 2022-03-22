import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, LogoIcon, Link } from '@pancakeswap-libs/uikit';
import { useWeb3React } from '@web3-react/core'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { FLV_GRADIENT_GOLD } from 'style/FlavorsSectionStyles'
import { Router } from 'react-router-dom'
import { getWeb3NoAccount } from 'utils/web3';
//import history from './routerHistory'




//url('/images/cake-bg.svg');
const StyledPresaleCard = styled(Card)`
  background-image: ${FLV_GRADIENT_GOLD};
  
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  
  margin-bottom: 16px;
`
// color: ${({ theme }) => theme.colors.textSubtle};
const Label = styled.div`
  
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`


export const fetchUserBalances = async (account) => {
  const web3 = getWeb3NoAccount()
  const bnbBalance = await web3.eth.getBalance(account)
}

const PresaleCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)
{/*}
  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

*/}
  {/*
  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {1
      setPendingTx(false)
    }
  }, [onReward])
*/}

  return (
    <StyledPresaleCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Presale
        </Heading>        
        <Block>
          Exclusive Presales for Flavors Holders.
        </Block>
        
        <Block>
          <CardImage src="/images/friends/scoopyAndFriends.svg" alt="scoopy logo" width={64} height={64} />     
          </Block>
        {/*  <Button startIcon={<LogoIcon />} endIcon={<LogoIcon />}> A Button </Button>
         <Block>
          <Label>CAKE to Harvest:</Label>
          <CakeHarvestBalance />
        </Block>
        <Block>
          <Label>CAKE in Wallet:</Label>
          <CakeWalletBalance />
        </Block>
      */}
        {/*}
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              width="100%"
            >
              {pendingTx
                ? 'Collecting CAKE'
                : TranslateString(532, `Harvest all (${balancesWithValue.length})`, {
                    count: balancesWithValue.length,
                  })}
            </Button>
          ) : (
            <UnlockButton width="100%" />
          )}
        </Actions>
        */}
      </CardBody>
    </StyledPresaleCard>
  )
}

export default PresaleCard
