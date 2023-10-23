import React from 'react'
import './Card.css'
const Card = (props) => {

  

  return (

<div className='Container'>
  
    <div className="card animate__animated animate__fadeIn">
      <div className='overflow'>
        <img src={props.imagen} className="card-img-top" alt="..."></img>
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <h6 className="card-text">{props.description}</h6>
        <a href="#" className="btn btn-success">Ver</a>
      </div>
    </div>

</div>
  )
}


export default Card