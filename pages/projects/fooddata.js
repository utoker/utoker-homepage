import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const FoodDataApp = () => (
  <Layout title="FoodData App">
    <Container>
      <Title>
        FoodData App <Badge>2022</Badge>
      </Title>
      <P>
        A website for getting nutrient profile data of requested food from{' '}
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
          <Link href="https://github.com/utoker/FoodData-App">
            https://github.com/utoker/FoodData-App
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>Next.js / Axios / Chakra UI</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/fooddata-app_01.png"
        alt="FoodData App"
      />
      <ProjectImage
        src="/images/projects/fooddata-app_02.png"
        alt="FoodData App"
      />
      <ProjectImage
        src="/images/projects/fooddata-app_03.png"
        alt="FoodData App"
      />
    </Container>
  </Layout>
)

export default FoodDataApp
export { getServerSideProps } from '../../components/chakra'
