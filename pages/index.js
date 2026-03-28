import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  Text,
  SimpleGrid,
  HStack,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoMail, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import { ProjectGridItem } from '../components/grid-item'
import thumbLinkShortener from '../public/images/projects/link-shortener_eyecatch.png'
import thumbColdTrace from '../public/images/projects/coldtrace_eyecatch.png'
import BioGroup from '../components/bioGroup'
import TokerImage from '../public/images/Toker.jpg'

const Home = () => (
  <Layout>
    <Container maxW="container.lg">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Umut Toker
          </Heading>
          <p>Fullstack Software Engineer</p>
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
              width={230}
              height={230}
              priority
              placeholder="blur"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Tampa-based Software Engineer specializing in React-based data
          visualization and resilient frontend architectures. M.S. in Software
          Engineering with 3+ years building complex, production-grade
          applications handling 4,500+ real-time events/sec. AWS Certified with
          enterprise deployment experience at Fortune 500 companies. Strong
          foundation in Python and agile development practices.
        </Paragraph>
        <HStack spacing={4} justify="center" my={4}>
          <Button
            as="a"
            href="#projects"
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Work
          </Button>
          <Link href="/resume.pdf" isExternal>
            <Button
              leftIcon={<DownloadIcon />}
              variant="outline"
              colorScheme="teal"
            >
              Resume
            </Button>
          </Link>
        </HStack>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4} id="projects">
          Latest Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <ProjectGridItem
            id="coldtrace"
            title="ColdTrace - Real-time IoT Monitoring Platform"
            thumbnail={thumbColdTrace}
          >
            A real-time IoT monitoring platform built with Next.js, GraphQL
            Subscriptions, Recharts, and Leaflet. Architected to handle over
            10,000 updates per second for live temperature tracking, device
            mapping, and anomaly detection.
          </ProjectGridItem>
          <ProjectGridItem
            id="link-shortener"
            title="Reqq Link Shortener"
            thumbnail={thumbLinkShortener}
          >
            A high-performance URL shortener built with Next.js Edge Runtime and
            Redis. Achieves sub-40ms redirect latency and eliminates race
            conditions with an atomic Postgres click-tracking system.
          </ProjectGridItem>
        </SimpleGrid>
        <Box align="center" my={4}>
          <Link as={NextLink} href="/projects" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} variant="ghost" colorScheme="teal">
              See all projects
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <BioGroup />
      </Section>

      <Section delay={0.3}>
        <Divider my={4} />
        <Heading as="h3" variant="section-title">
          Let&apos;s Work Together
        </Heading>
        <Text
          mb={6}
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          Interested in working together or have a question? Feel free to reach
          out.
        </Text>
        <HStack spacing={4} justify="center" flexWrap="wrap">
          <Link href="mailto:utoker@gmail.com" isExternal>
            <Button leftIcon={<IoMail />} colorScheme="teal">
              Get in Touch
            </Button>
          </Link>
          <Link
            href="https://github.com/utoker"
            rel="noopener noreferrer"
            isExternal
          >
            <Button leftIcon={<IoLogoGithub />} variant="outline" colorScheme="teal">
              GitHub
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/utoker/"
            rel="noopener noreferrer"
            isExternal
          >
            <Button leftIcon={<IoLogoLinkedin />} variant="outline" colorScheme="teal">
              LinkedIn
            </Button>
          </Link>
        </HStack>
      </Section>
    </Container>
  </Layout>
)

export default Home
