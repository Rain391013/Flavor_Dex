import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import { Text } from '@pancakeswap-libs/uikit'
import { Fonts } from 'style/FlavorsStyle'
import styled from 'styled-components'

export const TextData = styled.div`
  font-family: ${Fonts.Consolas};
`

export interface AnimatedNumbersProps {
  value: number
  decimals?: number
  fontSize?: string
  lineHeight?: string
  prefix?: string
  suffix?: string
  bold?: boolean
  color?: string
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({
  value,
  decimals,
  prefix = '',
  suffix = '',
}) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    
      <TextData>
        {prefix}
        {countUp}
        {suffix}
    </TextData>
    

  )
}

export default AnimatedNumbers
