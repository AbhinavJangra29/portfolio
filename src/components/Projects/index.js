import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on some very cool projects integrating machine learning models with interactive UI. Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={project.id}/>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects