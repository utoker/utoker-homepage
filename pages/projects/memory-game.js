import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const MemoryGame = () => (
  <Layout title="Memory Game">
    <Container maxW="container.lg">
      <Title>
        Memory Game <Badge>2021</Badge>
      </Title>
      <P>
        A mini game made with React JS. To score points you need to pick a card
        that you have not picked before.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://utoker.github.io/memory-game/">
            https://utoker.github.io/memory-game/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/memory-game">
            https://github.com/utoker/memory-game
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>React / Material UI</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/resume-builder_01.png"
        alt="Memory Game"
      />
    </Container>
  </Layout>
)

export default MemoryGame
export { getServerSideProps } from '../../components/chakra'
