import React from 'react'
import { useState } from 'react'
import s from './Projects.module.scss'
import fourierPng from '../../assets/fourier/fourier.png'
import hangmanPng from '../../assets/hangman/hangman.png'
import guesswordPng from '../../assets/guessword/guessword.png'
import fourierCode from '../../assets/fourier/fourier.txt'
import hangmanCode from '../../assets/hangman/hangman.txt'

const Projects = () => {
  const projectsList = ["Fourier", "Hangman", "GuessWord"]
  const [selectedProject, setSelectedProject] = useState("Fourier");
  const guessWordRoute = "http://localhost:3001/";

  const renderSwitch = (value) =>{
    switch(value){
      case 'Fourier':
        return (
          <div className={s.projectInfo}>
            <a href={fourierCode} download>              
              Baixe o código.  
            </a>
            <img src = {fourierPng} className = {s.fourierPng}/>
          </div> 
        );
      case 'Hangman':
        return (
          <div className={s.projectInfo}>
            <a href={hangmanCode} download>              
              Baixe o código.  
            </a>
            <img src = {hangmanPng} className = {s.hangmanPng}/>
          </div> 
        );
      case 'GuessWord':
        return (
          <div className={s.projectInfo}>
            <a href={guessWordRoute} target="_blank">Jogue!</a>       
            <img src = {guesswordPng} className = {s.guesswordPng}/>
          </div>
        );
    }
  }

  return (
    <div className={s.main}>
      <header>
        Projetos
      </header>
      <main>
        <div className={s.projectHeader}>
          {projectsList.map((project, i)=>(
            <div key={i} onClick = {() => setSelectedProject(project)}>
              {project}
            </div>
            ))
          }
        </div>
        {renderSwitch(selectedProject)}
        <br></br>
        <br></br>
        <br></br>
      </main>
    </div>
  )
}

export default Projects