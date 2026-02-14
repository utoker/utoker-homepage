import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const EtchASketch = () => (
  <Layout title="Etch a Sketch">
    <Container maxW="container.lg">
      <Title>
        Etch a Sketch <Badge>2021</Badge>
      </Title>
      <P>A drawing web app made with plain JavaScript.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://utoker.github.io/etch-a-sketch/">
            https://utoker.github.io/etch-a-sketch/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/etch-a-sketch">
            https://github.com/utoker/etch-a-sketch
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>JavaScript / HTML / CSS</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/etch-a-sketch_01.png"
        alt="Etch A Sketch"
      />
    </Container>
  </Layout>
)

export default EtchASketch
