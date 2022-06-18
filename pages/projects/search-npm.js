import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
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
        API for the TypeScript programming environment. More information about
        npmsearch.com and their API can be found at their{' '}
        <Link href="https://github.com/npms-io" target="_blank">
          GitHub
        </Link>{' '}
        repository.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://food-data-app.vercel.app/">
            https://food-data-app.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/FoodData-App">
            https://github.com/utoker/FoodData-App
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>Next.js / TypeScript / Chakra UI / Axios </span>
        </ListItem>
      </List>
      {/* <ProjectImage
        src="/images/projects/fooddata-app_01.png"
        alt="FoodData App"
      /> */}
      {/* <ProjectImage
        src="/images/projects/fooddata-app_02.png"
        alt="FoodData App"
      />
      <ProjectImage
        src="/images/projects/fooddata-app_03.png"
        alt="FoodData App"
      /> */}
    </Container>
  </Layout>
)

export default SearchNpm
export { getServerSideProps } from '../../components/chakra'