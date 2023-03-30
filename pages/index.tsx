import Head from 'next/head'
import { styled } from '../stitches.config'
import { Box } from '../components/box'
import { Output } from '../components/output'
import { VideoForm } from '../components/video-form'
import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger
} from '../components/tabs'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast'
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
        <TabsRoot defaultValue="progress">
          <TabsList aria-label="Output">
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="result">Result</TabsTrigger>
          </TabsList>
          <TabsContent value="progress">
            <Output>Progress will go here</Output>
          </TabsContent>
          <TabsContent value="result">
            <Output>Result will go here</Output>
          </TabsContent>
        </TabsRoot>
      </Container>
    </Box>
  )
}
