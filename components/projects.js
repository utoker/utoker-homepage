import {
  reactNativeProjects,
  reactProjects,
  vanillaJsProjects
} from '../lib/projects-array'
import Section from './section'
import { ProjectGridItem } from './grid-item'

export const ReactNaviteProjects = () => {
  return reactNativeProjects.map(project => (
    <Section key={project.id} delay={project.delay}>
      <ProjectGridItem
        id={project.id}
        title={project.title}
        thumbnail={project.thumbnail}
      >
        {project.description}
      </ProjectGridItem>
    </Section>
  ))
}

export const ReactProjects = () => {
  return reactProjects.map(project => (
    <Section key={project.id} delay={project.delay}>
      <ProjectGridItem
        id={project.id}
        title={project.title}
        thumbnail={project.thumbnail}
      >
        {project.description}
      </ProjectGridItem>
    </Section>
  ))
}

export const VanillaJsProjects = () => {
  return vanillaJsProjects.map(project => (
    <Section key={project.id} delay={project.delay}>
      <ProjectGridItem
        id={project.id}
        title={project.title}
        thumbnail={project.thumbnail}
      >
        {project.description}
      </ProjectGridItem>
    </Section>
  ))
}
