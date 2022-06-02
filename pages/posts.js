import Layout from '../components/layouts/article'
// import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
// import Section from '../components/section'
// import { GridItem } from '../components/grid-item'

const Posts = () => (
  <Layout title="Posts">
    {/* <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a portfolio website"
            thumbnail={placeholder}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="s"
            thumbnail={placeholder}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="My Fish workflow"
            thumbnail={placeholder}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="My desk"
            thumbnail={placeholder}
            href="https://www.youtube.com/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="H" thumbnail={placeholder} href="https:/" />
          <GridItem title="" thumbnail={placeholder} href="" />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={placeholder}
            href="https://"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={placeholder}
            href="https://www.youtube.com"
          />
        </SimpleGrid>
      </Section>
    </Container> */}
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
