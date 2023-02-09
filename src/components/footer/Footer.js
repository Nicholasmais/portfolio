import React from 'react'
import s from "./Footer.module.scss"
const Footer = () => {
  return (    
    <div className={s.container}>
      <a href="https://www.linkedin.com/in/nicholas-eras/" target="blank" > <i className="fab fa-linkedin-in" ></i></a>
      <a href="https://github.com/Nicholasmais" target="blank" > <i className="fab fa-github" ></i></a>
      <div className={s.lt}>
        <a href="http://lattes.cnpq.br/0252689841316986" target="blank" > <img src='icon_Lattest (1).ico'/></a>      
      </div>
    </div>
  )
}

export default Footer