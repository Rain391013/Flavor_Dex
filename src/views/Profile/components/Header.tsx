import React from 'react'
import { Button, Flex, Heading, useModal, Won } from '@pancakeswap-libs/uikit'
import { useProfile } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import ClaimNftAndCakeModal, { useCanClaim } from './ClaimGiftModal'
import HeaderWrapper from './HeaderWrapper'
import EditProfileModal from './EditProfileModal'

const ProfileHeader = () => {
  const { canClaim, checkClaimStatus } = useCanClaim()
  const [onPresentClaimGiftModal] = useModal(<ClaimNftAndCakeModal onSuccess={checkClaimStatus} />)
  const [onEditProfileModal] = useModal(<EditProfileModal />, false)
  const { hasProfile } = useProfile()

  return (
    <HeaderWrapper>
      <Flex
        flexDirection={['column', null, 'row']}
        alignItems={['start', null, 'center']}
        justifyContent="space-between"
      >
        <div>
          <Heading as="h1" size="xxl" mb="8px" color="secondary">
            Your Profile
          </Heading>
          <Heading as="h2" size="lg" mb="16px">
            Check your stats and collect achievements
          </Heading>
          {hasProfile && <Button onClick={onEditProfileModal}>Edit Profile</Button>}
        </div>
        {canClaim && (
          <Button variant="tertiary" onClick={onPresentClaimGiftModal} startIcon={<Won />}>
            You've got a gift to claim!
          </Button>
        )}
      </Flex>
    </HeaderWrapper>
  )
}

export default ProfileHeader
