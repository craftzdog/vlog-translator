import React from 'react'
import { styled } from '@stitches/react'
import { Box } from './box'

type Props = {
  children: string | undefined
}

export const Output: React.FC<Props> = ({ children }) => {
  return (
    <Box css={{ flex: 1, overflow: 'auto' }} className="output-container">
      <Pre>{children}</Pre>
    </Box>
  )
}

export const Pre = styled('pre', {
  margin: '1em',
  fontSize: '1.2em',
  whiteSpace: 'pre-wrap'
})
