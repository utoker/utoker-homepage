import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

const GridItemBase = ({ children, title, thumbnail, linkProps }) => (
  <Box w="100%" textAlign="center">
    <LinkBox as="article" cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <LinkOverlay {...linkProps}>
        <Text mt={2} fontSize={20} fontWeight="bold">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

// GridItem: For external links (opens in new tab)
export const GridItem = ({ children, href, title, thumbnail }) => (
  <GridItemBase
    title={title}
    thumbnail={thumbnail}
    linkProps={{ href, target: '_blank', rel: 'noopener noreferrer' }}
  >
    {children}
  </GridItemBase>
)

// ProjectGridItem: For internal navigation with Next.js
export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <GridItemBase
    title={title}
    thumbnail={thumbnail}
    linkProps={{ href: `/projects/${id}` }}
  >
    {children}
  </GridItemBase>
)

// GridItemStyle: Adds global styles for the grid-item-thumbnail class
export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
