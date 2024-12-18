import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ShoppingList = () => (
  <Layout title="Shopping List">
    <Container maxW="container.lg">
      <Title>
        Shopping List <Badge>2021</Badge>
      </Title>
      <P>A shopping list app made with plain JavaScript.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://utoker.github.io/shopping-list/">
            https://utoker.github.io/shopping-list/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/shopping-list">
            https://github.com/utoker/shopping-list
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>JavaScript / HTML / CSS</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/shopping-list_01.png"
        alt="Shopping List"
      />
    </Container>
  </Layout>
)

export default ShoppingList
export { getServerSideProps } from '../../components/chakra'
