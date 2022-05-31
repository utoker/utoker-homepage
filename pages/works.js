import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbWork1 from '../public/images/works/work1.png'
import thumbWork2 from '../public/images/works/work2.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid cloumns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="work1" tittle="work1" thumbnail={thumbWork1}>
              Lorem ipsum dolor sit amet.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="work2" tittle="work2" thumbnail={thumbWork2}>
              Lorem ipsum dolor sit amet.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
