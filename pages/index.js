import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in NY.
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
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/toker.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          architecto reprehenderit adipisci eligendi, nostrum eveniet, delectus
          nulla veritatis vel quod vero sed facere odit voluptas.
          <NextLink href="/works/#">
            <Link>Work</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1993</BioYear>
          Born in Antalya, Turkey.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          doloribus
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
