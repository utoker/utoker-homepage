import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  // useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoMail, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import { ProjectGridItem } from '../components/grid-item'
import thumbLinkShortener from '../public/images/projects/link-shortener_eyecatch.png'
import thumbAlbertSolver from '../public/images/projects/albert-solver_eyecatch.png'
import BioGroup from '../components/bioGroup'
import TokerImage from '../public/images/Toker.jpg' // Static import

const Home = () => (
  <Layout>
    <Container maxW="container.lg">
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a web developer based in New York!
      </Box> */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Umut Toker
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box flexShrink={0} ml={{ md: 6 }} textAlign="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w={{ base: '120px', md: '230px' }}
            h={{ base: '120px', md: '230px' }}
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={TokerImage}
              alt="Profile image"
              width={230} // Static width for Next.js Image
              height={230}
              priority // Load the image faster
              placeholder="blur" // Add blur effect until loaded
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I’m a full-stack engineer turning ideas into production-ready tools.
          Right now I’m building edge-optimized React 19 / Next 15 apps on
          Supabase while pursuing an M.S. in Software Engineering at Western
          Governors University to sharpen my domain-driven-design expertise.
        </Paragraph>
        <Box align="center" my={4}>
          <Link as={NextLink} href="/projects" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My projects
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          Latest Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <ProjectGridItem
            id="link-shortener"
            title="Reqq Link Shortener"
            thumbnail={thumbLinkShortener}
          >
            Edge-first URL shortener rebuilt in 2025.. Custom slugs, Supabase
            RLS, and Vercel Edge Middleware deliver p95 redirects in 32 ms
          </ProjectGridItem>
          <ProjectGridItem
            id="albert-solver"
            title="Albert Solver"
            thumbnail={thumbAlbertSolver}
          >
            Study companion powered by GPT-4: outlines essays, suggests
            citations, and exports Markdown notes in one click
          </ProjectGridItem>
        </SimpleGrid>
      </Section>
      <Section delay={0.2}>
        <BioGroup />
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://github.com/utoker"
              rel="noopener noreferrer"
              isExternal
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                github.com/utoker
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://linkedin.com/in/utoker/"
              rel="noopener noreferrer"
              isExternal
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                linkedin.com/in/utoker
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="mailto:utoker@gmail.com"
              rel="noopener noreferrer"
              isExternal
            >
              <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
                utoker@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
