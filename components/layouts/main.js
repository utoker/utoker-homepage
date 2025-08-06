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

const isHomePage = (path) => path === '/' || path === '/index'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} w="100%">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Umut's homepage" />
        <meta name="author" content="Umut Toker" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Umut Toker" />
        <meta name="og:title" content="Umut Toker" />
        <meta property="og:type" content="website" />
        <title>Umut Toker - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.lg" px={0} py={0} pt={14}>
        {isHomePage(router.asPath) && <LazyVoxelDesk />}
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
