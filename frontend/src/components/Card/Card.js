import React from 'react'
import './Card.css';
// import circle from '../../images/circle.png';
import ChartBar from '../Chart/ChartBar';
const Card = (props) => {
  return (
    <div className='wish-card'>
        <div className='wish-card-left'>
        <h2>{props.title}</h2>
        <h3>cost</h3>
        <p>₹{props.amount}</p>
      </div>
      <ChartBar key={props.title} value={props.saving} maxValue={props.amount} label={props.saving}/>
    </div>
  )
}

export default Card
