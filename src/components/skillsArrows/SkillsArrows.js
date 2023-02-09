import React from 'react'
import s from "./SkillsArrows.module.scss";

const SkillsArrows = ({skill, img, text}) => {
  return (
    <div className={s.container}>
      <div className={s.skill}>
        {skill}
      </div>
      <div className={s.card}>
        <div className={s.img}>
          <i className={img}/>
        </div>
        <div className={s.text}>
          {text.map((obj, i)=>(
            <div key={`div-${i}`}>{obj}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsArrows