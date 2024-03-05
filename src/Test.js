import React from 'react'

const Test = (props) => {
  return (
    <div>
        <h1>My name is {props.name} I am from {props.state}</h1>
        {props.children}
    </div>
    
  )
}

export default Test