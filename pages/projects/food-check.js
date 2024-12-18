import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const FoodCheck = () => (
  <Layout title="Food Check App">
    <Container maxW="container.lg">
      <Title>
        Food Check App <Badge>2021</Badge>
      </Title>
      <P>
        Food Check is a simple barcode grocery scanner that lets you quickly
        discover a food&apos;s ingredient information.
      </P>

      <List ml={4} my={4}>
        {/* <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.reqq.cc">
            https://www.reqq.cc
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/food-check">
            https://github.com/utoker/food-check
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>React Native / JavaScript </span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/food-check.gif"
        alt="Food Check App"
      />
    </Container>
  </Layout>
)

export default FoodCheck
export { getServerSideProps } from '../../components/chakra'
