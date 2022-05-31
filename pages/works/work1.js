import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title="work1">
      <Container>
        <Title>
          Work1
          <Badge>2022</Badge>
        </Title>
        <P>Lorem ipsum dolor sit amet.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="/">
              https://www.work1.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, ReactJS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/work1.png" alt="work1" />
        <WorkImage src="/images/works/work1.png" alt="work1" />
      </Container>
    </Layout>
  )
}

export default Work
