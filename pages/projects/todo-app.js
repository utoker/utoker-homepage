import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const TodoApp = () => (
  <Layout title="To Do App">
    <Container maxW="container.lg">
      <Title>
        To Do App <Badge>2021</Badge>
      </Title>
      <P>A TypeScript React app for creating to do list.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://todo-app-utoker.vercel.app/">
            https://todo-app-utoker.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/todo-app">
            https://github.com/utoker/todo-app
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>React / TypeScript / Next.js</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/todo-app_01.png"
        alt="Book Order App"
      />
    </Container>
  </Layout>
)

export default TodoApp
export { getServerSideProps } from '../../components/chakra'
