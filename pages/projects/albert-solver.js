import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const AlbertSolverApp = () => (
  <Layout title="Albert Solver">
    <Container maxW="container.lg">
      <Title>
        Albert Solver <Badge>2023</Badge>
      </Title>
      <P>
        This project aims to provide a comprehensive solution for expert
        assistance with essays and homework using cutting-edge AI technology,
        powered by OpenAI&apos;s GPT-3 language model.
      </P>
      <P> </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.albertsolver.com">
            https://www.albertsolver.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/albert-solver">
            https://github.com/utoker/albert-solver
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>TS / Next / Prisma / NextAuth / NextUI / SWR / Stripe</span>
        </ListItem>
      </List>
      <ProjectImage src="/images/projects/albert.gif" alt="Albert Solver" />
    </Container>
  </Layout>
)

export default AlbertSolverApp
