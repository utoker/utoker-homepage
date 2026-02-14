import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ResumeBuilder = () => (
  <Layout title="Resume Builder">
    <Container maxW="container.lg">
      <Title>
        Resume Builder <Badge>2021</Badge>
      </Title>
      <P>
        A React app which allows users to create their own resume and save it as
        a PDF file.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://utoker.github.io/resume-builder/">
            https://utoker.github.io/resume-builder/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/utoker/resume-builder">
            https://github.com/utoker/resume-builder
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>React / Material UI / UUID / ReactToPrint</span>
        </ListItem>
      </List>
      <ProjectImage
        src="/images/projects/resume-builder_01.png"
        alt="Resume Builder"
      />
    </Container>
  </Layout>
)

export default ResumeBuilder
