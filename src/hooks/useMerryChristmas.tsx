import { useEffect } from 'react'
import { useParticleBurst } from '@pancakeswap-libs/uikit'
import { useLocation } from 'react-router-dom'

const disableWhenNotChristmas = () => {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()

  if (month !== 12) {
    return true
  }

  if (![24, 25].includes(day)) {
    return true
  }


  // flavorsDev NOTE: TODO: commenting this out disables christmas surprise
  // need to get some flavors xmas images to replace the sanata bunny
  return true   // this disables xmas
  // return false // this enables it
}

const useMerryChristmas = () => {
  const { pathname } = useLocation()
  const { initialize, teardown } = useParticleBurst({
    imgSrc: '/images/.svg',
    disableWhen: disableWhenNotChristmas,
    debounceDuration: 1000,
  })

  useEffect(() => {
    initialize()

    return () => teardown()
  }, [pathname, initialize, teardown])
}

export default useMerryChristmas
