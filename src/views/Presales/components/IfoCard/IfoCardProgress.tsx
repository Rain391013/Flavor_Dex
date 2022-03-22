import React from 'react'
import { Box, Progress } from '@pancakeswap-libs/uikit'

interface IfoCardProgressProps {
  progress: number
}

const PresaleCardProgress: React.FC<IfoCardProgressProps> = ({ progress }) => {
  return (
    <Box mb="16px">
      <Progress primaryStep={progress} />
    </Box>
  )
}

export default PresaleCardProgress
