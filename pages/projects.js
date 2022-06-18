import { Container, Divider, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbFoodOrderApp from '../public/images/projects/food-order-app_eyecatch.png'
import thumbBookOrderApp from '../public/images/projects/book-order-app_eyecatch.png'
import thumbFoodDataApp from '../public/images/projects/fooddata-app_eyecatch.png'
import thumbSearchNpm from '../public/images/projects/search-npm_eyecatch.png'
import thumbToDoApp from '../public/images/projects/todo-app_eyecatch.png'
import thumbResumeBuilder from '../public/images/projects/resume-builder_eyecatch.png'
import thumbMemoryGame from '../public/images/projects/memory-game_eyecatch.png'
import thumbCalculator from '../public/images/projects/calculator_eyecatch.png'
import thumbTicTocToe from '../public/images/projects/tic-tac-toe_eyecatch.png'
import thumbEtchASketch from '../public/images/projects/etch-a-sketch_eyecatch.png'
import thumbShoppingList from '../public/images/projects/shopping-list_eyecatch.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        React Apps
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id={'fooddata'}
            title={'FoodData App'}
            thumbnail={thumbFoodDataApp}
          >
            A website for getting nutrient profile data of requested food from
            USDA Food Database with API.
          </ProjectGridItem>
        </Section>

        <Section>
          <ProjectGridItem
            id={'search-npm'}
            title={'Search NPM'}
            thumbnail={thumbSearchNpm}
          >
            A web app for searching node packages with the implementation of{' '}
            <Link href="https://npms.io/" target="_blank">
              npms.io
            </Link>{' '}
            API.
          </ProjectGridItem>
        </Section>

        <Section>
          <ProjectGridItem
            id={'resume-builder'}
            title={'Resume Builder'}
            thumbnail={thumbResumeBuilder}
          >
            A React app which allows users to create their own resume and save
            it as a PDF file.
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem
            id={'book-order-app'}
            title={'Book Order App'}
            thumbnail={thumbBookOrderApp}
          >
            Book order app built with React & Redux.
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem
            id={'memory-game'}
            title={'Memory Game'}
            thumbnail={thumbMemoryGame}
          >
            A mini game made with React. To score points you need to pick a card
            that you have not picked before.
          </ProjectGridItem>
        </Section>

        <Section delay={0.2}>
          <ProjectGridItem
            id={'food-order-app'}
            title={'Food Order App'}
            thumbnail={thumbFoodOrderApp}
          >
            A shopping cart app built with React useReducer.
          </ProjectGridItem>
        </Section>

        <Section delay={0.2}>
          <ProjectGridItem
            id={'todo-app'}
            title={'To Do App'}
            thumbnail={thumbToDoApp}
          >
            A TypeScript React app for creating to do list.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Vanilla JavaScript Apps
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <ProjectGridItem
            id={'calculator'}
            title={'Calculator'}
            thumbnail={thumbCalculator}
          >
            A calculator web app made with vanilla JavaScript.
          </ProjectGridItem>
        </Section>

        <Section delay={0.4}>
          <ProjectGridItem
            id={'tic-tac-toe'}
            title={'Tic Tac Toe'}
            thumbnail={thumbTicTocToe}
          >
            A mini tic tac toe game made with vanilla JavaScript.
          </ProjectGridItem>
        </Section>
        <Section delay={0.4}>
          <ProjectGridItem
            id={'etch-a-sketch'}
            title={'Etch a Sketch'}
            thumbnail={thumbEtchASketch}
          >
            A drawing web app made with vanilla JavaScript.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id={'shopping-list'}
            title={'Shopping List'}
            thumbnail={thumbShoppingList}
          >
            A shopping list app made with vanilla JavaScript.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
