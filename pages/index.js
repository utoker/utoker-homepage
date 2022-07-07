import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoMail, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import { ProjectGridItem } from '../components/grid-item'
import thumbLinkShortener from '../public/images/projects/link-shortener_eyecatch.png'
import thumbFoodDataApp from '../public/images/projects/fooddata-app_eyecatch.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a web app developer based in New York!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Umut Toker
          </Heading>
          <p>Developer</p>
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
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I specialize in JavaScript and have experience working with TypeScript
          and React. I also have experience working with Next.js
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          Some Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <ProjectGridItem
            id="link-shortener"
            title="Reqq Link Shortener"
            thumbnail={thumbLinkShortener}
          >
            A link shortening service that includes custom short URLs.
          </ProjectGridItem>
          <ProjectGridItem
            id="fooddata"
            title="FoodData App"
            thumbnail={thumbFoodDataApp}
          >
            A website for getting nutrient profile data of requested food from
            USDA Food Database with API.
          </ProjectGridItem>
        </SimpleGrid>
      </Section>
      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1</BioYear>
          Born in Antalya, Turkey.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated from Eskişehir Osmangazi University (Turkish State
          University) with a bachelor&apos;s degree in business administration.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Move to Long Island, New York.
        </BioSection>
      </Section> */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/utoker" target="_blank">
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
            <Link href="https://linkedin.com/in/utoker/" target="_blank">
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
            <Link href="mailto:utoker@gmail.com" target="_blank">
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
