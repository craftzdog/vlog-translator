import * as Tabs from '@radix-ui/react-tabs'
import { styled } from '@stitches/react'

export const TabsRoot = styled(Tabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.5em',
  minHeight: 0
})

export const TabsList = styled(Tabs.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid $gray400`
})

export const TabsTrigger = styled(Tabs.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'white',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: '$foreground',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: '$purple600' },
  '&[data-state="active"]': {
    color: '$purple600',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor'
  }
})

export const TabsContent = styled(Tabs.Content, {
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
  flexGrow: 1,
  paddingTop: 1,
  backgroundColor: 'white',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none'
})
