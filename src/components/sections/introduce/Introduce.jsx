import React from 'react'
import SectionWrapper from '../../hoc'


import classes from "./Introduce.module.css"
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
const Introduce = () => {
  return (
    <section className={classes["introduce-wrapper"]}>

      <div>Introduce</div>
    </section>
  )
}

export default SectionWrapper(Introduce, "introduce");