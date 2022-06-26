import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ReactProjects, VanillaJsProjects } from '../components/projects'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          React Apps
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <ReactProjects />
        </SimpleGrid>

        <Section delay={0.3}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Vanilla JavaScript Apps
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
