import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const FoodOrderApp = () => (
  <Layout title="Food Order App">
    <Container>
      <Title>
        Food Order App <Badge>2021</Badge>
      </Title>
      <P>A shopping cart app built with React useReducer</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://food-order-app-utoker.vercel.app/">
            https://food-order-app-utoker.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/food-order-app">
            https://github.com/utoker/food-order-app
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>React.JS / CSS</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/food-order-app_01.png"
        alt="Food Order App"
      />
    </Container>
  </Layout>
)

export default FoodOrderApp
export { getServerSideProps } from '../../components/chakra'
