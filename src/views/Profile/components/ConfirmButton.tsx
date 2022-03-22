import React from 'react'
import styled from 'styled-components'
import {
  ChevronRightIcon,
  Button as UIKitButton,
  AutoRenewIcon,
  ChevronDownIcon,
  Box,
  Flex,
} from '@pancakeswap-libs/uikit'


interface ConfirmButtonProps {
  isConfirming: boolean
  isConfirmDisabled: boolean
  onConfirm: () => void
}

const StyledConfirmButton = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 1fr 24px 1fr;
  }
`

const Button = styled(UIKitButton)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 160px;
  }
`

const iconAttrs = { width: '24px', color: 'textDisabled' }

const ChevronRight = styled(ChevronRightIcon).attrs(iconAttrs)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const ChevronBottom = styled(ChevronDownIcon).attrs(iconAttrs)`
  display: block;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const spinnerIcon = <AutoRenewIcon spin color="currentColor" />

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  isConfirming,
  isConfirmDisabled,
  onConfirm,
}) => {
  

  return (
    <StyledConfirmButton>
      <Flex justifyContent="center">
        <ChevronRight />
        <ChevronBottom />
      </Flex>
      <Box>
        <Button
          onClick={onConfirm}
          disabled={isConfirmDisabled}
          isLoading={isConfirming}
          endIcon={isConfirming ? spinnerIcon : undefined}
        >
          {isConfirming ? 'Confirming' : 'Confirm'}
        </Button>
      </Box>
    </StyledConfirmButton>
  )
}

export default ConfirmButton
