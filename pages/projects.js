import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  ReactNativeProjects,
  ReactProjects,
  VanillaJsProjects
} from '../components/projects'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container maxW="container.md">
        <Heading as="h3" fontSize={20} mb={4}>
          React Native Apps
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <ReactNativeProjects />
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={4}>
          React Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <ReactProjects />
        </SimpleGrid>

        <Section delay={0.3}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Vanilla JavaScript Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <VanillaJsProjects />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
export { getServerSideProps } from '../components/chakra'
