import Head from 'next/head'
import StitchesLogo from '../components/StitchesLogo'
import { styled } from '../stitches.config'
import { Box } from './components/box'
import { VideoForm } from './components/video-form'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast'
})

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600'
})

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px'
      },
      2: {
        maxWidth: '585px'
      },
      3: {
        maxWidth: '865px'
      }
    }
  }
})

export default function Home() {
  return (
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>YouTube Transcription &amp; Japanese Translation</title>
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <Text as="h1">Vlog Transcription &amp; Japanese Translation Tool</Text>
        <VideoForm />
      </Container>
    </Box>
  )
}
