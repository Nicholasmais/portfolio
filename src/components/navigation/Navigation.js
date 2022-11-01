import React from 'react'
import s from "./Navigation.module.scss"
const Navigation = () => {
  return (
    <div className={s.container}>
      <ul>
        <div>
          Nícholas Eras
        </div>
      </ul>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navigation