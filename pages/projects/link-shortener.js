import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const FoodOrderApp = () => (
  <Layout title="Reqq Link Shortener">
    <Container maxW="container.lg">
      <Title>
        Reqq Link Shortener <Badge>2021</Badge>
      </Title>
      <P>
        The reqq.cc is an easy-to-use link shortening service with an option to
        use custom URLs.
      </P>
      <P>
        I developed this web application as a free alternative to paid services
        like bit.ly or tinyurl.com.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.reqq.cc">
            https://www.reqq.cc
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/link-shortener">
            https://github.com/utoker/link-shortener
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>React / TypeScript / Next.js / MySQL</span>
        </ListItem>
      </List>
      <ProjectImage src="/images/projects/reqq.gif" alt="Reqq Link Shortener" />
    </Container>
  </Layout>
)

export default FoodOrderApp
export { getServerSideProps } from '../../components/chakra'
