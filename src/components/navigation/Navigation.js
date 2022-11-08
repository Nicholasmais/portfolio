import React from 'react'
import s from "./Navigation.module.scss"
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname.slice(1));
  const routes = [
    {route:"home", name:"Home"},
    {route:"projects",name:"Projects"},
    {route:"contact",name:"Contact"}
  ]

  useEffect(()=>{
    setCurrent(location.pathname.slice(1));
  },[location])

  return (
    <div className={s.container}>
      <ul>
        <div>
          <i>"First, solve the problem.</i>
          <br/>
          <i>Then write the code"</i>
        </div>
      </ul>
      <ul>
        {routes.map((obj, i) => {
          return(<div key={i} className={`${current === obj.route ? s.border : ""}` 
            }>
              <Link to={obj.route}>{obj.name}</Link>
            </div>);
        })}
      </ul>
    </div>
  )
}

export default Navigation