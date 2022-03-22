import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Card, CardBody, CardRibbon, LinkExternal, Skeleton } from '@pancakeswap-libs/uikit';
import { Ifo, IfoStatus } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import useGetPublicIfoData from 'hooks/useGetPublicIfoData'
import UnlockButton from 'components/UnlockButton'
import IfoCardHeader from './IfoCardHeader'
import IfoCardDetails from './IfoCardDetails'
import IfoCardActions from './IfoCardActions'
import IfoCardProgress from './IfoCardProgress'
import IfoCardTime from './IfoCardTime'
import useRefresh from 'hooks/useRefresh';
import { useAppDispatch } from 'state';
import { setBlock } from 'state/block';
import { fetchFarmsPublicDataAsync } from 'state/farms';
import { fetchPoolsPublicDataAsync } from 'state/pools';
import { getWeb3NoAccount } from 'utils/web3';
import drips from 'config/constants/drips';
import { Drip } from 'config/constants/types';
import { Text } from '@pancakeswap-libs/uikit';
export interface IfoCardProps {
  ifo: Ifo
}

const StyledIfoCard = styled(Card)<{ ifoId: string }>`
  background-image: ${({ ifoId }) => `url('/images/ifos/${ifoId}-bg.svg')`};
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 130px;
  margin-left: auto;
  margin-right: auto;
  max-width: 437px;
  width: 100%;
`

const IfoCard: React.FC<IfoCardProps> = ({ ifo }) => {
  const { id, name, subTitle, address, projectSiteUrl } = ifo
  return (
    <StyledIfoCard ifoId={id}>
      <CardBody>
        <IfoCardHeader presaleId={id} name={name} subTitle={subTitle} />
        <Text>Description</Text>
        <Text>{ifo.description}</Text>
        <LinkExternal href={ `https://bscscan.com/address/${address}` }  style={{ margin: '' }}>
          {address}
        </LinkExternal>
        <LinkExternal href={ projectSiteUrl }  style={{ margin: '' }}>
          Project Website
        </LinkExternal>
        
      </CardBody>
    </StyledIfoCard>
  )
}

export default IfoCard
