import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const FoodOrderApp = () => (
  <Layout title="Reqq Link Shortener">
    <Container>
      <Title>
        Reqq Link Shortener <Badge>2021</Badge>
      </Title>
      <P>A link shortening service that includes custom short URLs.</P>
      <P>
        I did this project Because I did not want to pay for a basic forwarding
        service like bit.ly or tinyurl.com as a software developer.
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
          <span>React Next.js / Prisma / PlanetScale / tRPC / Chakra UI</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/link-shortener_01.png"
        alt="Reqq Link Shortener"
      />
      <ProjectImage
        src="/images/projects/link-shortener_02.png"
        alt="Reqq Link Shortener"
      />
    </Container>
  </Layout>
)

export default FoodOrderApp
export { getServerSideProps } from '../../components/chakra'
