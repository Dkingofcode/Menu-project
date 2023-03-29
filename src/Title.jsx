import React from 'react'

const Title = ({ text }) => {
  return (
    <div>
    <h2>{text || 'Default TItle'}</h2>

    </div>
  )
}

export default Title;