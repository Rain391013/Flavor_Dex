import React, { useEffect, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
// import EasterEgg from './components/EasterEgg'
// import Pools from './views/Pools'
// import GlobalCheckClaimStatus from './views/Collectibles/components/GlobalCheckClaimStatus'
import history from './routerHistory'


// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Presales = lazy(() => import('./views/Presales'))
const Drips = lazy(() => import('./views/Drips'))
const NotFound = lazy(() => import('./views/NotFound'))



// const Farms = lazy(() => import('./views/Farms'))
// const Lottery = lazy(() => import('./views/Lottery'))
 // const Collectibles = lazy(() => import('./views/Collectibles'))
 // const Teams = lazy(() => import('./views/Teams'))
 // const Team = lazy(() => import('./views/Teams/Team'))
 // const Profile = lazy(() => import('./views/Profile'))
 // const TradingCompetition = lazy(() => import('./views/TradingCompetition'))
// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  

  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()
  // useFetchPriceList()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/presales" exact>
              <Presales />
            </Route>
            <Route path="/drips" exact>
              <Drips />
            </Route>
            
            {/* 404 */}
            <Route component={NotFound} />

            { /*
           
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Pools />
            </Route>
            <Route path="/lottery">
              <Lottery />
            </Route>
            
             
            <Route path="/ifos">
              <Ifos />
            </Route>

            <Route path="/collectibles">
              <Collectibles />
            </Route>
            
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route path="/teams/:id">
              <Team />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/competition">
              <TradingCompetition />
            </Route> 
            */}
            
            {/* Redirect */}
            
            {/*
            <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route> 
             */}
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      {/*  <EasterEgg iterations={2} /> */}
      <ToastListener />
      { /* <GlobalCheckClaimStatus excludeLocations={['/collectibles']} /> */ }
    </Router>
  )
}





export default React.memo(App)
