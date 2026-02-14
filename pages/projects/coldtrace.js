import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ColdTraceApp = () => (
  <Layout title="Cold Trace">
    <Container maxW="container.lg">
      <Title>
        Cold Trace <Badge>2025</Badge>
      </Title>
      <P>
        IoT monitoring dashboard for vaccine cold chains. Features real-time
        data visualization (Recharts), GraphQL subscriptions, and a
        high-fidelity simulation engine.
      </P>
      <P> </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.coldtrace.app">
            https://www.coldtrace.app
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/coldtrace">
            https://github.com/utoker/coldtrace
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>
            Next.js 15 / TypeScript / GraphQL / Recharts / Zustand / Turborepo /
            shadcn ui
          </span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/coldtrace_eyecatch.png"
        alt="ColdTrace - Real-time IoT Monitoring Platform"
      />
    </Container>
  </Layout>
)

export default ColdTraceApp
