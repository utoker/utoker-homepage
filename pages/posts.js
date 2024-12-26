import Layout from '../components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'

const Posts = () => (
  <Layout title="Posts">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
