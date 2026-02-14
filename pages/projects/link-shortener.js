import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const FoodOrderApp = () => (
  <Layout title="Reqq Link Shortener">
    <Container maxW="container.lg">
      <Title>
        Reqq Link Shortener <Badge>2025</Badge>
      </Title>
      <P>
        <b>Edge-first URL shortener</b> rebuilt in 2025 to be lightning-fast and
        privacy-friendly.
      </P>
      <br />
      <P>
        <ul>
          <li>
            <b>2 ms p95 redirects</b> thanks to Vercel Edge Middleware & KV
            caching.
            <li>
              <b>Custom slugs</b> for logged-in users, anonymous links supported
              out of the box.
            </li>
          </li>{' '}
          <li>
            All writes protected by <b>Supabase Row-Level Security</b> +{' '}
            <b>Zod</b> validation.
          </li>
          <li> Modular backend actions keep the client bundle under 30 kB.</li>
          <li>
            Serving <b>500 + active links</b> in production.
          </li>
        </ul>
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
          <span>
            React 19 · Next.js 15 (App Router) · Supabase · TypeScript · Zod ·
            Vercel Edge Middleware
          </span>
        </ListItem>
      </List>
      <ProjectImage src="/images/projects/reqq.gif" alt="Reqq Link Shortener" />
    </Container>
  </Layout>
)

export default FoodOrderApp
