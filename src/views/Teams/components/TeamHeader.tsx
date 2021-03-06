import React from 'react'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import { useProfile } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import HeaderWrapper from 'views/Profile/components/HeaderWrapper'
import NoProfileCard from './NoProfileCard'

const TeamHeader = () => {
  const { isInitialized, profile } = useProfile()
  const showProfileCallout = isInitialized && !profile

  return (
    <>
      {showProfileCallout && <NoProfileCard />}
      <HeaderWrapper>
        <Heading as="h1" size="xxl" color="secondary">
          {`Teams & Profiles`}
        </Heading>
        <Text bold>
          Show off your stats and collectibles with your unique profile. Team features will be revealed soon!          
        </Text>
      </HeaderWrapper>
    </>
  )
}

export default TeamHeader
