import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const LaunchKitApp = () => (
  <Layout title="LaunchKit" description="Production SaaS boilerplate with per-user data isolation, a full Stripe subscription lifecycle, and streaming AI chat powered by Claude.">
    <Container maxW="container.lg">
      <Title>
        LaunchKit <Badge>2026</Badge>
      </Title>
      <P>
        A production-ready SaaS boilerplate built 0-to-1. Features zero-trust
        per-user data isolation enforced at the database layer with PostgreSQL
        Row-Level Security, a full Stripe subscription lifecycle (Checkout,
        Customer Portal, webhooks), and real-time AI chat streamed from Claude
        via the Vercel AI SDK.
      </P>
      <P> </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://saas-boilerplate-utokers-projects.vercel.app"
            isExternal
          >
            Live Demo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/launchkit" isExternal>
            https://github.com/utoker/launchkit
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>
            Next.js 16 / React 19 / TypeScript / Supabase / Stripe / Anthropic
            Claude (Vercel AI SDK)
          </span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/launchkit_eyecatch.png"
        alt="LaunchKit - SaaS boilerplate"
      />
    </Container>
  </Layout>
)

export default LaunchKitApp
