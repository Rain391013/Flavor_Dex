import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'
import DripTabButtons from './components/IfoTabButtons'
import Hero from './components/Hero'
import CurrentDrips from './CurrentIfo'
import PastDrips from './PastIfo'



const Drips = () => {
  const { path } = useRouteMatch()
      


 
  return (
    <>
      <Hero />
      <Container>
        <DripTabButtons />
        <Route exact path={`${path}`}>
          <CurrentDrips />
        </Route>
        <Route path={`${path}`}>
        {/* <Route path={`${path}/history`}>  */}
          <PastDrips />
        </Route>
      </Container>
    </>
  )
}

export default Drips
