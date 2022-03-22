import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'

const Wrapper = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 39px;
  `


const DripTabButtons = () => {
  const { url, isExact } = useRouteMatch()

  return (
    <Wrapper>
      <ButtonMenu activeIndex={!isExact ? 1 : 0} scale="sm" variant="primary">
        <ButtonMenuItem as={Link} to={`${url}`}>
          Current Drips
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}`}>
        {/* <ButtonMenuItem as={Link} to={`${url}/history`}> */}
          Past Drips
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default DripTabButtons
