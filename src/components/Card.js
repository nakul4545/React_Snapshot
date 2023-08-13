import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <img className='img' src={props.data.avatar_url} />
        <h2>{props.data.login}</h2>
            
    </div>
  )
}
