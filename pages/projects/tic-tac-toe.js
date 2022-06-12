import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const TicTacToe = () => (
  <Layout title="Tic Tac Toe">
    <Container>
      <Title>
        Tic Tac Toe <Badge>2021</Badge>
      </Title>
      <P>A mini tic tac toe game made with plain JavaScript.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://utoker.github.io/tic-tac-toe/">
            https://utoker.github.io/tic-tac-toe/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/tic-tac-toe">
            https://github.com/utoker/tic-tac-toe
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>JavaScript / HTML / CSS</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/tic-tac-toe_01.png"
        alt="Tic Tac Toe"
      />
    </Container>
  </Layout>
)

export default TicTacToe
export { getServerSideProps } from '../../components/chakra'
