import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'
import PresaleTabButtons from './components/PresaleTabButtons'
import Hero from './components/Hero'
import CurrentPresale from './CurrentIfo'
import PastPresale from './PastIfo'

const Presales = () => {
  const { path } = useRouteMatch()
 
  return (
    <>
      <Hero />
      <Container>
        {/* <PresaleTabButtons /> */}
        <Route exact path={`${path}`}>
          <CurrentPresale />
        </Route>
        <Route path={`${path}`}>
        {/* <Route path={`${path}/history`}> */}
          <PastPresale />
        </Route>
      </Container>
    </>
  )
}

export default Presales
