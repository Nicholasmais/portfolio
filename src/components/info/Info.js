import React from 'react'
import s from "./Info.module.scss"

const Info = () => {
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
        da Editora Atena.</article>
    </div>
  )
}

export default Info