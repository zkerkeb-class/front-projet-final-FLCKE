import React from 'react'
import './index.css'
function Badge({text}) {

  return (
    <div data-status={text} className="badge">
      {text}
    </div>
  )
}

export default Badge