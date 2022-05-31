import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbnail1 from '../public/images/works/work1.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Section delay={0.5}>
        <SimpleGrid cloumn={[1, 2, 2]} gap={6}>
          <GridItem
            title="title1"
            thumbnail={thumbnail1}
            href="htttps://google.com"
          />
          <GridItem
            title="title2"
            thumbnail={thumbnail1}
            href="htttps://google.com"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
