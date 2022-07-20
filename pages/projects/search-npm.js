import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ProjectImage } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const SearchNpm = () => (
  <Layout title="Search NPM">
    <Container>
      <Title>
        Search NPM <Badge>2022</Badge>
      </Title>
      <P>
        A web app for searching node packages with the implementation of{' '}
        <Link href="https://npms.io/" target="_blank">
          npms.io
        </Link>{' '}
        Rest API. More information about npmsearch.com and their API can be
        found at their{' '}
        <Link href="https://github.com/npms-io" target="_blank">
          GitHub
        </Link>{' '}
        repository.
      </P>
      <P>
        I did this project to learn how to use React-Redux in a TypeScript
        environment and use it as a boilerplate for my following projects.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://search-npm.vercel.app">
            https://search-npm.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/search-npm">
            https://github.com/utoker/search-npm
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>React / Redux / TypeScript </span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/npm-search_01.png"
        alt="Reqq Link Shortener"
      />
      <ProjectImage
        src="/images/projects/npm-search_02.png"
        alt="Reqq Link Shortener"
      />
    </Container>
  </Layout>
)

export default SearchNpm
export { getServerSideProps } from '../../components/chakra'
