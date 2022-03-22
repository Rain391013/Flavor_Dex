import { BaseLayout, Heading, Text } from '@pancakeswap-libs/uikit';
import Page from 'components/layout/Page';
import React from 'react';
import { Colors } from 'style/FlavorsStyle';
import styled from 'styled-components';
import CakeStats from 'views/Home/components/CakeStats';
import EarnAPYCard from 'views/Home/components/EarnAPYCard';
import EarnAssetCard from 'views/Home/components/EarnAssetCard';
import FarmStakingCard from 'views/Home/components/FarmStakingCard';
import LotteryCard from 'views/Home/components/LotteryCard';
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard';
import WinCard from 'views/Home/components/WinCard';
import Contribute from 'views/Presales/components/IfoCard/Contribute';
import LeadInBanner from 'views/TradingCompetition/components/LeadInBanner';
import PresaleCard from './components/PresaleCard';
import { Image } from '@pancakeswap-libs/uikit';
import Spacer from 'components/Spacer';
import { TextData } from 'views/Presales/components/IfoCard/AnimatedNumbers';

// /images/flavors/token3d.png
const Hero = styled.div`
  align-items: center;
  background-color: ${Colors.flavors.gradients.pink};
  background-image: url('');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/flavors/scoopy/individual/1x/sherbert.png'),
    url('/images/flavors/scoopy/individual/1x/strawbuuddy.png');
    background-position: left center, right center;
    height: 200px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }`

const Home: React.FC = () => {
  return (
    <>
      { /* <LeadInBanner /> */ }
      <Page>
        <Hero>
          
          <Heading as="h1" size="xl" mb="24px" color="secondary">
          Flavors.Tools<Image src="/images/flavors/flavorsbsc-branded-2x.png" alt="scoopy coin" width={1068} mt="20px" height={296} responsive />
          </Heading>
          <div>
            </div>
          
          <Text>Tools and dApps to interact with the Flavors Defi ecosystem.</Text>
        </Hero>
        
        <div>
          <Cards>
            <PresaleCard />
            
            {/*  <FarmStakingCard />  */}
            {/*  <LotteryCard />  */}
          </Cards>
          <CTACards>
          
           {/*    <><EarnAPYCard /><EarnAssetCard /></>  */}
        

         {/*     <WinCard />   */}
          </CTACards>
          <Cards>
             <CakeStats />   
          { /* <TotalValueLockedCard /> */ }
          </Cards>
        </div>

        
      </Page>
    </>
  )
}

export default Home
