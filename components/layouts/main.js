import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container, Link } from '@chakra-ui/react'
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
      <Link
        href="#main-content"
        position="absolute"
        top="-40px"
        left="0"
        bg="grassTeal"
        color="#202023"
        p={2}
        zIndex={2}
        _focus={{ top: '0' }}
      >
        Skip to content
      </Link>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Umut Toker - Software Engineer specializing in React, data visualization, and frontend architectures. View projects and experience."
        />
        <meta name="author" content="Umut Toker" />
        <link rel="canonical" href={`https://www.utoker.com${router.asPath}`} />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Umut Toker" />
        <meta property="og:title" content="Umut Toker - Software Engineer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Software Engineer specializing in React, data visualization, and frontend architectures. View projects and experience."
        />
        <meta property="og:url" content={`https://www.utoker.com${router.asPath}`} />
        <meta
          property="og:image"
          content="https://www.utoker.com/images/Toker.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Umut Toker - Software Engineer" />
        <meta
          name="twitter:description"
          content="Software Engineer specializing in React, data visualization, and frontend architectures."
        />
        <meta
          name="twitter:image"
          content="https://www.utoker.com/images/Toker.jpg"
        />
        <title>Umut Toker - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.lg" px={0} py={0} pt={14}>
        {isHomePage(router.asPath) && <LazyVoxelDesk />}
        <Box id="main-content">{children}</Box>
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
