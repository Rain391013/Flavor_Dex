import React from 'react'
import styled from 'styled-components'
import { Button, Box, BoxProps, Flex, Input as UIKitInput, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import AnimatedNumbers from 'views/Presales/components/IfoCard/AnimatedNumbers';

export interface BalanceInputProps extends BoxProps {
  symbol: string
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void
  value: string
  onSelectMax?: () => void
}

const StyledBalanceInput = styled(Box)`
  background: ${({ theme }) => theme.colors.input};
  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.2) inset;
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 8px 16px;
`

const Input = styled(UIKitInput)`
  box-shadow: none;
  flex: 1;
`

const TokenSymbol = styled(Text)`
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`

const PresaleBalanceInput: React.FC<BalanceInputProps> = ({ symbol, onChange, onSelectMax, value, ...props }) => {

  return (
    <StyledBalanceInput {...props}>
       
        <Flex alignItems="center">
          <Input onChange={onChange} placeholder="0" value={value} />
          {onSelectMax && (
          <Button scale="sm" onClick={onSelectMax} ml="8px" mr="8px">
            MAX
          </Button>
        )}
        <TokenSymbol title={symbol}>{symbol}</TokenSymbol>
      </Flex>
    </StyledBalanceInput>
  )
}

export default PresaleBalanceInput
