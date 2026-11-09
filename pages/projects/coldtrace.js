import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, ProjectVideo, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ColdTraceApp = () => (
  <Layout title="Cold Trace" description="IoT monitoring dashboard for vaccine cold chains with real-time data over WebSockets and Redis PubSub, Recharts visualization, and a simulation engine.">
    <Container maxW="container.lg">
      <Title>
        Cold Trace <Badge>2025</Badge>
      </Title>
      <P>
        IoT monitoring dashboard for vaccine cold chains. Delivers 4,500+
        messages/sec to concurrent clients with sub-350ms p95 latency over
        WebSockets and Redis PubSub, with Recharts visualizing 100K+ data
        points and a Node.js simulation engine generating synthetic sensor data.
      </P>
      <P> </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.coldtrace.app" isExternal>
            https://www.coldtrace.app
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/coldtrace" isExternal>
            https://github.com/utoker/coldtrace
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>
            Next.js / React / GraphQL Subscriptions / Node.js / Redis / Zustand / Recharts
          </span>
        </ListItem>
      </List>
      <ProjectVideo
        src="/videos/coldtrace-demo.mp4"
        poster="/images/projects/coldtrace_demo_poster.jpg"
        label="ColdTrace demo: live device readings, a temperature excursion, alerts, and analytics"
      />
      <ProjectImage
        src="/images/projects/coldtrace_eyecatch.png"
        alt="ColdTrace - Real-time IoT Monitoring Platform"
      />
    </Container>
  </Layout>
)

export default ColdTraceApp
