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
  chakra,
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

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container.md">
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
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Umut Toker
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/toker.png"
              alt="Profile image"
              borderRadius="full"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I enjoys building tools that solve real problems. I’ve worked on
          everything from Python backends to modern web apps with React and
          Next.js, while exploring cloud tools like AWS and Azure.
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
            id="albert-solver"
            title="Albert Solver"
            thumbnail={thumbAlbertSolver}
          >
            This project provides assistance with essays and homework using
            cutting-edge AI technology, powered by OpenAI&apos;s GPT-3 language
            model.
          </ProjectGridItem>
          <ProjectGridItem
            id="link-shortener"
            title="Reqq Link Shortener"
            thumbnail={thumbLinkShortener}
          >
            The reqq.cc is an easy-to-use link shortening service with an option
            to use custom URLs.
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
