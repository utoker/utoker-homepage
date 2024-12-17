import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDeskLoader from '../voxel-desk-loader'

const LazyVoxelDesk = dynamic(() => import('../voxel-desk'), {
  ssr: false,
  loading: () => <VoxelDeskLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} w="100%">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Umut's homepage" />
        <meta name="author" content="Umut Toker" />
        <meta name="author" content="suxlike" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Umut Toker" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@utoker0" />
        <meta name="twitter:creator" content="@utoker0" />
        <meta property="og:site_name" content="Umut Toker" />
        <meta name="og:title" content="Umut Toker" />
        <meta property="og:type" content="website" />
        <meta name="twitter:image" content="https://www.utoker.com/card.png" />
        <meta property="og:image" content="https://www.utoker.com/card.png" />
        <title>Umut Toker - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" px={0} py={0} pt={14}>
        <LazyVoxelDesk />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
