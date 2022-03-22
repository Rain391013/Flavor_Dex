import { Button, Card, CardBody, useModal } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import Spacer from 'components/Spacer'
import UnlockButton from 'components/UnlockButton'
import { Ifo } from 'config/constants/types'
import { usePublicPresaleFLVContract } from 'hooks/useContract'
import { useCountdownToPresaleSTART } from 'hooks/useCountdownToPresaleSTART'
import React, { useEffect, useState } from 'react'
import { useToast } from 'state/hooks'
import styled from 'styled-components'
import FlavorsContributeModal from './flavorsContributeModal'
import PresaleCardHeader from './IfoCardHeader'
import PresaleAddresses from './PresaleAddresses'
import PresaleInfo from './PresaleInfo'
import PresaleLimits from './PresaleLimits'
import PresaleMyInfo from './PresaleMyDetails'
import PresaleRules from './PresaleRules'
import PresaleTimes from './PresaleTimes'

export interface IfoCardProps {
  ifo: Ifo
}

const StyledPresaleCard = styled(Card)<{ presaleId: string }>`
  background-image: ${({ presaleId: presaleId }) => `url('/images/ifos/${presaleId}-bg.svg')`};
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 130px;
  margin-left: auto;
  margin-right: auto;
  max-width: 437px;
  width: 100%;
`


const IfoCard: React.FC<IfoCardProps> = ({ ifo }) => {
  const { id, name, subTitle } = ifo
  const publicPresaleContract = usePublicPresaleFLVContract()
  const { account } = useWeb3React()
  



  const useCountdownToPresaleSTART = (contract: any) => {
    // GETS DATA AFTER 1 SECOND DELAY
    const [state, setCountdownToPresaleSTART] = useState(0);
    useEffect(() => {
      const interval = setTimeout(async () => {
        const _state = await contract.methods.getTimes().call()
        setCountdownToPresaleSTART(_state)
        //console.log(_state)
      }, 1000)
      return () => clearInterval(interval)
    }, [contract])
    // GETS DATA AFTER 1 SECOND DELAY
    const presaleSTART =  state[4]
    return presaleSTART
  }

  const countdownToPresale = useCountdownToPresaleSTART(publicPresaleContract)

  




 //   const [countdown, setCountdown] = useState(0)
//  const getCountdown = () => {
//    useEffect(() => {
    //  const interval = setInterval(async () => {
  //      const countdownToPresale = useCountdownToPresaleSTART(publicPresaleContract)
      //  setCountdown(countdownToPresale)
      //}, 1000)
  //    return () => clearInterval(interval)
  //  }, [])
  //}
  //getCountdown()


  const { toastSuccess } = useToast()
  const handleContributeSuccess = () => {
    toastSuccess('Success!', `You have contributed BNB to the Presale!`)
  }
  const [onPresentContributeModal] = useModal(
    <FlavorsContributeModal contract={publicPresaleContract} onSuccess={handleContributeSuccess} />,
    false,
  )

  return (
    <StyledPresaleCard presaleId={id}>
      <CardBody>
        <PresaleCardHeader presaleId={id} name={name} subTitle={subTitle} />
        <PresaleTimes />
        <PresaleInfo />
        {account ? (
          <>
          {countdownToPresale<=0? (
            <>
            <Button onClick={onPresentContributeModal} variant="subtle" width="100%">
              Contribute
            </Button>
            </>

          ):
          <Button onClick={onPresentContributeModal} disabled variant="subtle" width="100%">
              ...waiting for presale to start
            </Button>
          }
            <Spacer />

            
          </>
        ) : (
          <UnlockButton />
        )}


        <PresaleLimits />
        <PresaleMyInfo />
        <PresaleAddresses />
        <PresaleRules />
      </CardBody>
    </StyledPresaleCard>
  )
}

export default IfoCard
