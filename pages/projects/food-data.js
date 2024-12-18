import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const FoodData = () => (
  <Layout title="Food Data">
    <Container maxW="container.lg">
      <Title>
        Food Data<Badge>2022</Badge>
      </Title>
      <P>
        Food Data is a web app for getting nutrient profile data of requested
        food from{' '}
        <Link href="https://fdc.nal.usda.gov/" target="_blank">
          USDA Food Database
        </Link>{' '}
        with Rest API.
      </P>
      <P>
        I did this project to look up a food&apos;s nutrients in seconds without
        having to google it.
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
          <Link href="https://github.com/utoker/food-data">
            https://github.com/utoker/food-data
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>Next.js / React / JavaScript</span>
        </ListItem>
      </List>
      <ProjectImage src="/images/projects/food-data.gif" alt="Food Data" />
    </Container>
  </Layout>
)

export default FoodData
export { getServerSideProps } from '../../components/chakra'
