import React from 'react'
import CardStyles from "../Styles/Card.module.css"

const Card = ({payload}) => {
  return (
    <div className={CardStyles.userCard}>
      <div className={CardStyles.userCardBody}>
          <h2 style={{color:"#1d8b0d"}}>Login Exitoso!</h2>
          <h3 className={CardStyles.userName}>Nombre</h3>
          <p className={CardStyles.userInfo}>{payload.name}</p>
          <h3 className={CardStyles.userPassword}>Contraseña</h3>
          <p className={CardStyles.userInfo}>{payload.password}</p>
      </div>
    </div>
  )
}

export default Card