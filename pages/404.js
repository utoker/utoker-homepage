import { Button, Container, Divider, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} align="center" />
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Heading>
    </Container>
  )
}

export default NotFound
