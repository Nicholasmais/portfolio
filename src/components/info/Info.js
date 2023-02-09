import React from 'react'
import s from "./Info.module.scss"
import SkillsArrows from '../skillsArrows/SkillsArrows'
const Info = () => {
  const skills = [
    {
    name:"Python",
    img: "fab fa-python fa-2x",
    text:
      [
        "Flask",
        "Pandas",
        "Numpy",
        "Scikit-learn",
        "Matplotlib"
      ]
    },
    {
      name:"Javascript",
      img: "fab fa-js-square fa-2x",
      text:
        [
          "React",
          "Next.js",
          "Node.js"          
        ]
      },
      {
        name:"SQL",
        img: "fas fa-server fa-2x",
        text:
          [
            "MySQL",
            "PostgreSQL"                    
          ]
        }
   ];
  return (
    <div className={s.main}>
      <h1>Nícholas Eras</h1>
      <h3>Dev Fullstack</h3>
      <article>
        Uma grande paixão por física e matemática - que despertou meu 
        interesse em compreender o funcionamento da natureza - trouxe-me
        uma conquista muito valiosa: ser convocado para 3ª fase nível 3 
        da Olimpíada Brasileira de Física (OBF) em 2017. Ao ingressar 
        no Ensino Superior, tive a oportunidade de participar de uma
        iniciação cientifica em Materiais Absorvedores de Radiação
        Eletromagnética (MAREs), conquistando a publicação de um artigo 
        da equipe como um capítulo no livro "As Engenharias agregando
        Conhecimento em Setores Emergentes de Pesquisa e Desenvolvimento",
        da Editora Atena.
      </article>
      <section>
        {skills.map((obj, i)=>(
          <div className={`${s.i}`} key={`div-${i}`}>
            <SkillsArrows skill={obj.name} img={obj.img} text={obj.text} key={`skill-arrow-${i}`}/>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Info