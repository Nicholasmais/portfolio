import React from 'react'
import s from './Projects.module.scss'

const Projects = () => {
  const fourierPng = ""
  const projectsList = ["Fourier", "Hangman", "GuessWord"]

  return (
    <div class={s.main}>
      <header>
        Projetos
      </header>
      <main>
        <div class={s.projectHeader}>
          {projectsList.map((project, i)=>(
            <div key={i}>
              {project}
            </div>
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Projects