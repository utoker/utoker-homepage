import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Calculator = () => (
  <Layout title="Calculator">
    <Container maxW="container.lg">
      <Title>
        Calculator <Badge>2021</Badge>
      </Title>
      <P>A calculator web app made with plain JavaScript.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://utoker.github.io/calculator/">
            https://utoker.github.io/calculator/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/calculator">
            https://github.com/utoker/calculator
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>JavaScript / HTML / CSS</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/calculator_01.png"
        alt="Calculator App"
      />
    </Container>
  </Layout>
)

export default Calculator
