import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const BookOrderApp = () => (
  <Layout title="Book Order App">
    <Container>
      <Title>
        Book Order App <Badge>2021</Badge>
      </Title>
      <P>Book order app built with React and Redux</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://book-order-app.vercel.app/">
            https://book-order-app.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/book-order-app">
            https://github.com/utoker/book-order-app
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>React.Js / CSS</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/book-order-app_01.png"
        alt="Book Order App"
      />
    </Container>
  </Layout>
)

export default BookOrderApp
export { getServerSideProps } from '../../components/chakra'
