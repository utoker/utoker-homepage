import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/projects" scroll={false}>
      Projects
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ProjectImage = ({
  src,
  alt,
  width = '480px',
  height = 'auto'
}) => (
  <Box w={width} mx="auto">
    <Image borderRadius="lg" w="100%" h={height} src={src} alt={alt} mb={4} />
  </Box>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
